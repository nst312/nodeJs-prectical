module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  "rules": {
    "no-use-before-define": [
      "error",
      {
        "functions": true,
        "classes": true,
        "variables": true,
        "allowNamedExports": false
      }
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "no-await-in-loop": "error",
    "no-empty-pattern": "error",
    "no-self-compare": "error",
    "no-self-assign": [
      "error",
      {
        "props": true
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "semi": [
      "error",
      "always"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "no-trailing-spaces": "error",
    "max-len": [
      "error",
      {
        "code": 100,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreStrings": true
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false,
      }
    ],
    "multiline-ternary": [
      "error",
      "always"
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        "objectsInObjects": false
      }
    ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        "singleValue": false,
        "objectsInArrays": false
      }
    ],
    "space-in-parens": ["error", "never"],
    "no-multi-spaces": "error",
    "key-spacing": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "prefer-const": "error",
  },
};
