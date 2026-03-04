import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
     include: ["tests/**/*.spec.ts"],
    coverage: {
      ...defaultExclude,
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      include: ["src/**/*.ts"],
      exclude: [
        ...defaultExclude,
        "**/*.spec.ts",
        "**/node_modules/**",
        "src/config/**",
        "**/service/interface"      ]
    }
  },
});