import acceptedTokens from '../../phase-2/artifacts/design-tokens.json';

/**
 * The accepted Gate 2.5 token artifact is imported only here. UI layers must
 * consume this module rather than reaching into Phase 2 documentation.
 */
export const designTokens = acceptedTokens;

export const signalProfiles = designTokens.color.profile;
export const evidenceDepthStates = designTokens.content.evidenceDepthStates;
