const createSingleComment = ({ summary, testUrl, reportPublicUrl }) => {
  const formatResult = (res) => Math.round((res * 100));
  Object.keys(summary).forEach(key => summary[key] = formatResult(summary[key]));
  const score = res => res >= 90 ? "🟢" : res >= 50 ? "🟠" : "🔴";
  return [
    `⚡️ [Lighthouse report](${reportPublicUrl}) for the changes in this PR:`,
    "| Category | Score |",
    "| --- | --- |",
    `| ${score(summary.performance)} Performance | ${summary.performance} |`,
    `| ${score(summary.accessibility)} Accessibility | ${summary.accessibility} |`,
    `| ${score(summary["best-practices"])} Best practices | ${summary["best-practices"]} |`,
    `| ${score(summary.seo)} SEO | ${summary.seo} |`,
    `| ${score(summary.pwa)} PWA | ${summary.pwa} |`,
    " ",
    `*Lighthouse ran on [${testUrl}](${testUrl})*`
  ].join("\n")
}


module.exports = ({ results, links, assertionResults }) => {
  return results.map(result =>{
    const testUrl = Object.keys(links).find(key => key === result.url)
    const reportPublicUrl = links[testUrl]
    return createSingleComment({summary: result.summary, testUrl, reportPublicUrl})
  }).join("\n")
};


