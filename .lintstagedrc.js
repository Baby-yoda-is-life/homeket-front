module.exports = {
  // This needs to be a function so that lint-staged does not pass any file arguments to the check-types script
  // which would make it fail
  '*.{ts,tsx}': () => 'yarn tsc -p tsconfig.json',
  '*.{js,jsx,ts,tsx}': 'yarn lint',
  // 'styles.ts': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,html,md,json,yml}': 'prettier --write',
};
