/** @type {import('lint-staged').Config} */
export default {
  // Lint TypeScript and JavaScript files with ESLint
  "*.{ts,tsx,mts,cts,mjs,cjs,js,jsx}": ["eslint --fix --no-warn-ignored"],
  // Format supported files with Prettier
  "*.{ts,tsx,mts,cts,mjs,cjs,js,jsx,json,md,yaml,yml,css,html}": [
    "prettier --write --no-error-on-unmatched-pattern",
  ],
};
