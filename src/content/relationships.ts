import type { Publication } from './schema';

interface RelationshipError {
  message: string;
  sourceId: string;
  targetId?: string;
}

/**
 * Validates cross-record relationship semantics after every individual MDX
 * frontmatter block has passed its own schema. `related` is reciprocal;
 * `extends` and `supersedes` are directional and may not form cycles.
 */
export function validateRelationships(records: readonly Publication[]): RelationshipError[] {
  const byId = new Map(records.map((record) => [record.id, record]));
  const errors: RelationshipError[] = [];

  for (const record of records) {
    for (const relation of record.relationships) {
      const target = byId.get(relation.id);

      if (!target) {
        errors.push({
          message: 'Relationship target does not exist.',
          sourceId: record.id,
          targetId: relation.id,
        });
        continue;
      }

      if (target.id === record.id) {
        errors.push({
          message: 'A record cannot relate to itself.',
          sourceId: record.id,
          targetId: target.id,
        });
      }

      if (relation.kind === 'related') {
        const hasReverse = target.relationships.some(
          (candidate) => candidate.id === record.id && candidate.kind === 'related',
        );
        if (!hasReverse) {
          errors.push({
            message: 'Related records must declare a reciprocal relationship.',
            sourceId: record.id,
            targetId: target.id,
          });
        }
      }
    }
  }

  for (const kind of ['extends', 'supersedes'] as const) {
    const graph = new Map<string, string[]>();
    for (const record of records) {
      graph.set(
        record.id,
        record.relationships
          .filter((relation) => relation.kind === kind)
          .map((relation) => relation.id),
      );
    }

    const visited = new Set<string>();
    const active = new Set<string>();
    const visit = (id: string): void => {
      if (active.has(id)) {
        errors.push({ message: `${kind} relationships cannot form a cycle.`, sourceId: id });
        return;
      }
      if (visited.has(id)) return;

      visited.add(id);
      active.add(id);
      for (const targetId of graph.get(id) ?? []) visit(targetId);
      active.delete(id);
    };

    for (const id of graph.keys()) visit(id);
  }

  return errors;
}
