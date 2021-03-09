const GOOGLE_MAP_API_KEY = 'AIzaSyCmYLD0dkgSUN4aWETYjQ-g1DNL5B4IBsE'
const GOOGLE_MAP_ROOT_URL = 'https://maps.googleapis.com/maps/api/js'
const GOOGLE_MAP_URL = `${GOOGLE_MAP_ROOT_URL}?key=${GOOGLE_MAP_API_KEY}&callback=initMap`
const GOOGLE_MAP_PRELOAD_URL =
  'https://maps.googleapis.com/maps/api/js?callback=__googleMapsCallback&key=AIzaSyCmYLD0dkgSUN4aWETYjQ-g1DNL5B4IBsE&v=weekly'

const getGoogleMapPreloadLink = () => ({
  href: GOOGLE_MAP_PRELOAD_URL,
  rel: 'preload',
  as: 'script',
})

const getGoogleMapScript = () => ({
  src: GOOGLE_MAP_URL,
  async: true,
  defer: true,
})

export {
  GOOGLE_MAP_API_KEY,
  GOOGLE_MAP_URL,
  getGoogleMapPreloadLink,
  getGoogleMapScript,
}
