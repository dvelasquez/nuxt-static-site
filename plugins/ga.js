/* eslint-disable */
import Perfume from 'perfume.js'

const METRIC_NAMES = [
  'fp',
  'fcp',
  'lcp',
  'lcpFinal',
  'fid',
  'cls',
  'clsFinal',
  'tbt',
  'tbt10S',
  'tbtFinal',
]

const perfumeSetup = (gtag) => {
  new Perfume({
    analyticsTracker: ({ metricName, data, navigatorInformation }) => {
      if (METRIC_NAMES.includes(metricName)) {
        gtag('event', 'performance', {
          eventCategory: 'Perfume.js',
          eventAction: metricName,
          // Google Analytics metrics must be integers, so the value is rounded
          eventValue: metricName === 'cls' ? data * 1000 : data,
          eventLabel: navigatorInformation.isLowEndDevice
            ? 'lowEndExperience'
            : 'highEndExperience',
          // Use a non-interaction event to avoid affecting bounce rate
          nonInteraction: true,
        })
      }
    },
  })
}

export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  // if (process.env.NODE_ENV !== 'production')
  //   return /*
  //    ** Include Google Analytics Script
  //    */
  // ;
  console.debug('loading Google Analytics')

  window.dataLayer = window.dataLayer || []

  function gtag() {
    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'G-WYW56VRCNE')
  perfumeSetup(gtag)
  /*
   ** Every time the route changes (fired on initialization too)
   */
  app.router.afterEach((to, from) => {
    /*
     ** We tell Google Analytics to add a `pageview`
     */
    gtag('set', 'page', to.fullPath)
    gtag('send', 'pageview')

    perfumeSetup(gtag)
  })
}
