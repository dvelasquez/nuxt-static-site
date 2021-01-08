module.exports = {
  ci: {
    collect: {
      staticDistDir: `./dist`,
      numberOfRuns: 1,
      githubAppToken: process.env.LHCI_GITHUB_APP_TOKEN,
      settings: {
        budgetPath: './budget.json',
      },
    },
    assert: {
      assertions: {
        // This setting asserts that the budgets audit passed in Lighthouse CI
        'performance-budget': 'warn',
      },
    },
  },
}
