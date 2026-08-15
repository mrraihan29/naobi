import { parseDocument } from 'yaml';

const immutableActionReference = /^[^@\s]+@[a-f0-9]{40}$/u;
const immutableDockerReference = /^docker:\/\/[^@\s]+@sha256:[a-f0-9]{64}$/u;
const allowedPermissionValues = new Set(['read', 'none']);

function validatePermissions(permissions, location) {
  if (permissions === 'read-all') {
    return [];
  }

  if (!permissions || typeof permissions !== 'object' || Array.isArray(permissions)) {
    return [`${location}: permissions must be read-all or an explicit read/none map`];
  }

  const failures = [];
  for (const [scope, access] of Object.entries(permissions)) {
    if (typeof access !== 'string' || !allowedPermissionValues.has(access)) {
      failures.push(`${location}: permission ${scope} must be read or none`);
    }
  }
  return failures;
}

function validateUses(reference, location) {
  if (typeof reference !== 'string') {
    return [`${location}: uses must be a static string`];
  }

  if (reference.startsWith('./')) {
    return [];
  }

  if (reference.startsWith('docker://')) {
    return immutableDockerReference.test(reference)
      ? []
      : [`${location}: Docker actions must use an immutable sha256 digest`];
  }

  return immutableActionReference.test(reference)
    ? []
    : [`${location}: external actions and reusable workflows must use a full commit SHA`];
}

function hasPullRequestTarget(trigger) {
  if (trigger === 'pull_request_target') {
    return true;
  }
  if (Array.isArray(trigger)) {
    return trigger.includes('pull_request_target');
  }
  return Boolean(
    trigger && typeof trigger === 'object' && Object.hasOwn(trigger, 'pull_request_target'),
  );
}

export function validateWorkflowPolicy(source, workflowPath = 'workflow.yml') {
  const document = parseDocument(source, {
    merge: false,
    schema: 'core',
    uniqueKeys: true,
  });

  if (document.errors.length > 0) {
    return document.errors.map((error) => `${workflowPath}: invalid YAML: ${error.message}`);
  }

  let workflow;
  try {
    workflow = document.toJS({ maxAliasCount: 100 });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return [`${workflowPath}: invalid YAML structure: ${message}`];
  }

  if (!workflow || typeof workflow !== 'object' || Array.isArray(workflow)) {
    return [`${workflowPath}: workflow root must be a mapping`];
  }

  const failures = [];
  if (!Object.hasOwn(workflow, 'permissions')) {
    failures.push(`${workflowPath}: explicit top-level permissions are required`);
  } else {
    failures.push(...validatePermissions(workflow.permissions, `${workflowPath}: top-level`));
  }

  if (hasPullRequestTarget(workflow.on)) {
    failures.push(`${workflowPath}: pull_request_target is prohibited`);
  }

  if (!workflow.jobs || typeof workflow.jobs !== 'object' || Array.isArray(workflow.jobs)) {
    failures.push(`${workflowPath}: jobs must be a mapping`);
    return failures;
  }

  for (const [jobName, job] of Object.entries(workflow.jobs)) {
    const jobLocation = `${workflowPath}: job ${jobName}`;
    if (!job || typeof job !== 'object' || Array.isArray(job)) {
      failures.push(`${jobLocation}: job must be a mapping`);
      continue;
    }

    if (Object.hasOwn(job, 'permissions')) {
      failures.push(...validatePermissions(job.permissions, jobLocation));
    }
    if (Object.hasOwn(job, 'uses')) {
      failures.push(...validateUses(job.uses, `${jobLocation} uses`));
    }

    if (job.steps === undefined) {
      continue;
    }
    if (!Array.isArray(job.steps)) {
      failures.push(`${jobLocation}: steps must be an array`);
      continue;
    }

    for (const [stepIndex, step] of job.steps.entries()) {
      if (step && typeof step === 'object' && !Array.isArray(step) && Object.hasOwn(step, 'uses')) {
        failures.push(...validateUses(step.uses, `${jobLocation} step ${stepIndex + 1} uses`));
      }
    }
  }

  return failures;
}
