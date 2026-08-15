import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'node',
    watch: false,
    clearMocks: true,
    restoreMocks: true,
    passWithNoTests: false,
  },
});
