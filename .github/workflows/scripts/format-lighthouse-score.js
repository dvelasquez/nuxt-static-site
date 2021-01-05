const score = res => res >= 90 ? "&#128994;" : res >= 50 ? "&#x1F7E1;" : "&#x1F534;";

const formatResult = (res) => Math.round((res * 100));

const createSingleRow = ({ summary, testUrl, reportPublicUrl }) => {
  const normalisedBody = {
    url: testUrl,
    performance: scoreEntry(summary.performance),
    accessibility: scoreEntry(summary.accessibility),
    bestPractices: scoreEntry(summary['best-practices']),
    seo: scoreEntry(summary.seo),
    pwa: scoreEntry(summary.pwa),
    reportUrl: reportPublicUrl
  }
  return createMarkdownTableRow(normalisedBody)
};

const scoreEntry = (scoreResult) => {
  const normalisedScore = formatResult(scoreResult)
  const scoreIcon = score(normalisedScore)
  return `${scoreIcon} ${normalisedScore}`
}

const createMarkdownTableHeader = () => {
  return [
    "| URL                       | Performance | Accessibility | Best Practices | SEO      | PWA     | Report |",
    "|---------------------------|-------------|---------------|----------------|----------|---------|--------|"
  ];
};

const createMarkdownTableRow = ({url, performance, accessibility, bestPractices, seo, pwa, reportUrl }) => {
  return `| ${url} | ${performance} | ${accessibility} | ${bestPractices} | ${seo} | ${pwa} | [View report](${reportUrl})|`
}

const createFullText = ({ results, links, assertionResults }) => {
  const tableHeader = createMarkdownTableHeader()
  const tableBody = results.map(result => {
    const testUrl = Object.keys(links).find(key => key === result.url);
    const reportPublicUrl = links[testUrl];
    return createSingleRow({ summary: result.summary, testUrl, reportPublicUrl });
  });
  const comment = ['⚡️ Lighthouse report for the changes in this PR',...tableHeader, ...tableBody]
  return comment.join("\n")
};

module.exports = createFullText;
