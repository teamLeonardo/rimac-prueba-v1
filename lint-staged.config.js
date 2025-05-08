module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    // do not pass args to the script
    () => 'pnpm run type:check',
    // () => 'npm run test',
    'pnpm run lint:staged',
    'pnpm run format:staged',
  ],
  'src/**/*.{css,scss,json,yml,yaml}': ['prettier --write'],
}
