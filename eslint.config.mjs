import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["build/**", "node_modules/**", "coverage/**"],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node,
    },
  },

  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),

  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["scripts/*.ts"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },

  prettier,
);
