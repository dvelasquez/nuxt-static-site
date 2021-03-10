const GOOGLE_MAP_STATIC_ROOT = 'https://maps.googleapis.com/maps/api/staticmap?'
const TOOLBAR_HEIGHT = 104 // Height of the toolbar in pixels
// https://developers.google.com/maps/documentation/maps-static/start#url-size-restriction
const GOOGLE_MAP_STATIC_URL_LIMIT = 8192
const ENC_PIPE = '%7C'

export interface LocationCoordinates {
  latitude: number
  longitude: number
}
export interface GoogleMapsSizeOptions {
  height: number
  width: number
}
export enum MarkerColors {
  BLACK = 'black',
  BROWN = 'brown',
  GREEN = 'green',
  PURPLE = 'purple',
  YELLOW = 'yellow',
  BLUE = 'blue',
  GRAY = 'gray',
  ORANGE = 'orange',
  RED = 'red',
  WHITE = 'white',
}
export enum MarkerSizes {
  TINY = 'tiny',
  MID = 'mid',
  SMALL = 'small',
}
export interface GoogleMapsStaticMarkerOptions {
  color?: MarkerColors | string
  label?: string
  location: string | LocationCoordinates
  size?: MarkerSizes
}

export enum MapType {
  ROADMAP = 'roadmap',
  SATELLITE = 'satellite',
  HYBRID = 'hybrid',
  TERRAIN = 'terrain',
}

export enum MapFormat {
  PNG8 = 'png8',
  PNG = 'png',
  PNG32 = 'png32',
  GIF = 'gif',
  JPG = 'jpg',
  JPG_BASELINE = 'jpg-baseline',
}
// https://developers.google.com/maps/documentation/maps-static/start#URL_Parameters
export interface GoogleMapsStaticOptions {
  center?: string | LocationCoordinates
  zoom: number
  size: string | GoogleMapsSizeOptions
  maptype?: MapType
  format?: MapFormat
  language?: string
  region?: string
  key: string
  signature?: string
  scale?: 1 | 2
  markers: GoogleMapsStaticMarkerOptions[]
  path?: string
  visible?: string
  style?: string
}

export interface StaticImageResult {
  default: string
  scale2x: string
}

const urlifyCenter = (center: string | LocationCoordinates): string => {
  if (typeof center === 'string') {
    return `center=${center}`
  }
  if (center.latitude && center.longitude) {
    return `center=${center.latitude},${center.longitude}`
  }
  return ''
}
const urlifyZoom = (zoom: number) => {
  if (zoom > 0 && zoom <= 20) {
    return `zoom=${zoom}`
  }
  return ''
}

const urlifySize = (size: string | GoogleMapsSizeOptions) => {
  if (typeof size === 'string' && size.includes('x')) {
    return `size=${size}`
  }
  if (typeof size !== 'string' && size.height && size.width) {
    return `size=${size.width}x${size.height}`
  }
  return ''
}

const urlifyMarker = (marker: GoogleMapsStaticMarkerOptions): string => {
  let markers = 'markers='
  if (marker.size) {
    markers = `${markers}size:${marker.size}`
  }
  if (marker.color) {
    markers = `${markers}${ENC_PIPE}color:${marker.color}`
  }
  if (marker.label) {
    markers = `${markers}${ENC_PIPE}label:${marker.label}`
  }
  if (marker.location && typeof marker.location === 'string') {
    markers = `${markers}${ENC_PIPE}${marker.location}`
  }
  if (
    typeof marker.location !== 'string' &&
    marker.location.latitude &&
    marker.location.longitude
  ) {
    markers = `${markers}${ENC_PIPE}${marker.location.latitude},${marker.location.longitude}`
  }

  return markers
}

const urlifyMarkers = (markers: GoogleMapsStaticMarkerOptions[]): string => {
  if (markers && markers.length > 0) {
    return markers.map(urlifyMarker).join('&')
  }
  return ''
}

const urlifyParameter = (name: string, value: number | string) =>
  `${name}=${value}`

const transformOptions = (options: GoogleMapsStaticOptions): string => {
  return Object.entries(options)
    .map(([key, value]) => {
      switch (key) {
        case 'center':
          return urlifyCenter(value)
        case 'zoom':
          return urlifyZoom(value)
        case 'size':
          return urlifySize(value)
        case 'markers':
          return urlifyMarkers(value)
        default:
          return urlifyParameter(key, value)
      }
    })
    .join('&')
}

const checkUrlLength = (url: string) => {
  if (url.length > GOOGLE_MAP_STATIC_URL_LIMIT) {
    console.warn(
      'gmap-static-utils: url length above the limit.',
      url,
      url.length
    )
  }
}

const getStaticMapImage = (
  options: GoogleMapsStaticOptions
): StaticImageResult => {
  const urlifyOptions = transformOptions(options)
  const staticImages = {
    default: `${GOOGLE_MAP_STATIC_ROOT}${urlifyOptions}`,
    scale2x: `${GOOGLE_MAP_STATIC_ROOT}${urlifyOptions}&scale=2`,
  }
  Object.entries(staticImages).forEach(([, value]) => checkUrlLength(value))

  return staticImages
}

export { getStaticMapImage }
