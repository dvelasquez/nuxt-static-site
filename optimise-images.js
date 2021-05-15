const path = require('path')
const fs = require('fs-extra')
const sharp = require('sharp')

const IMAGE_CONTENT_SOURCE = path.join(__dirname, 'static', 'content', 'places')
const IMAGE_CONTENT_WEBP = path.join(IMAGE_CONTENT_SOURCE, 'webp')
const IMAGE_CONTENT_JPG = path.join(IMAGE_CONTENT_SOURCE, 'jpg')
const IMAGE_CONTENT_AVIF = path.join(IMAGE_CONTENT_SOURCE, 'avif')
const IMAGE_CONTENT_WEBP_FULL = path.join(IMAGE_CONTENT_WEBP, 'full')
const IMAGE_CONTENT_JPG_FULL = path.join(IMAGE_CONTENT_JPG, 'full')
const IMAGE_CONTENT_AVIF_FULL = path.join(IMAGE_CONTENT_AVIF, 'full')
const IMAGE_CONTENT_WEBP_THUMBNAILS = path.join(
  IMAGE_CONTENT_WEBP,
  'thumbnails'
)
const IMAGE_CONTENT_JPG_THUMBNAILS = path.join(IMAGE_CONTENT_JPG, 'thumbnails')
const IMAGE_CONTENT_AVIF_THUMBNAILS = path.join(
  IMAGE_CONTENT_AVIF,
  'thumbnails'
)

const originalResize = {
  '1920w': { width: 1920 },
  '1280w': { width: 1280 },
  '640w': { width: 640 },
  '320w': { width: 320 },
}

const thumbResize = {
  '1920w': { width: 1344, height: 800, fit: 'cover' },
  '1280w': { width: 1008, height: 600, fit: 'cover' },
  '640w': { width: 675, height: 400, fit: 'cover' },
  '320w': { width: 336, height: 200, fit: 'cover' },
}

const emptyDirs = () => {
  fs.emptyDirSync(IMAGE_CONTENT_AVIF)
  fs.emptyDirSync(IMAGE_CONTENT_JPG)
  fs.emptyDirSync(IMAGE_CONTENT_WEBP)
  fs.emptyDirSync(IMAGE_CONTENT_WEBP_FULL)
  fs.emptyDirSync(IMAGE_CONTENT_WEBP_THUMBNAILS)
  fs.emptyDirSync(IMAGE_CONTENT_AVIF_FULL)
  fs.emptyDirSync(IMAGE_CONTENT_AVIF_THUMBNAILS)
  fs.emptyDirSync(IMAGE_CONTENT_JPG_FULL)
  fs.emptyDirSync(IMAGE_CONTENT_JPG_THUMBNAILS)
}

const transformWebp = ({ fileBuffer, fileOutputPath, sizeOptions, quality }) =>
  sharp(fileBuffer).resize(sizeOptions).webp(quality).toFile(fileOutputPath)

const transformAvif = ({ fileBuffer, fileOutputPath, sizeOptions, quality }) =>
  sharp(fileBuffer).resize(sizeOptions).avif(quality).toFile(fileOutputPath)

const transformJpg = ({ fileBuffer, fileOutputPath, sizeOptions, quality }) =>
  sharp(fileBuffer).resize(sizeOptions).jpeg(quality).toFile(fileOutputPath)

const mapResize =
  ({ type, content, fileName, fileBuffer, quality }) =>
  ([key, sizeOptions]) => ({
    fileBuffer,
    fileOutputPath: path.join(
      content,
      fileName.replace('.jpg', `_${key}.${type}`)
    ),
    sizeOptions,
    quality,
  })

const process =
  ({
    type,
    contentFull,
    qualityOption,
    contentThumbnails,
    transform,
    originalResize,
    thumbResize,
  }) =>
  ({ fileBuffer, file }) => {
    try {
      const quality = {
        quality: qualityOption,
      }

      const originalMap = Object.entries(originalResize).map(
        mapResize({
          type,
          content: contentFull,
          fileName: file,
          fileBuffer,
          quality,
        })
      )

      const thumbMap = Object.entries(thumbResize).map(
        mapResize({
          type,
          content: contentThumbnails,
          fileName: file,
          fileBuffer,
          quality,
        })
      )

      return Promise.all(originalMap.concat(thumbMap).map(transform))
    } catch (error) {
      console.error(error)
    }
  }
const processWebp = process({
  type: 'webp',
  contentFull: IMAGE_CONTENT_WEBP_FULL,
  qualityOption: 60,
  contentThumbnails: IMAGE_CONTENT_WEBP_THUMBNAILS,
  transform: transformWebp,
  originalResize,
  thumbResize,
})

const processAvif = process({
  type: 'avif',
  contentFull: IMAGE_CONTENT_AVIF_FULL,
  qualityOption: 50,
  contentThumbnails: IMAGE_CONTENT_AVIF_THUMBNAILS,
  transform: transformAvif,
  originalResize,
  thumbResize,
})

const processJpg = process({
  type: 'jpg',
  contentFull: IMAGE_CONTENT_JPG_FULL,
  qualityOption: 70,
  contentThumbnails: IMAGE_CONTENT_JPG_THUMBNAILS,
  transform: transformJpg,
  originalResize,
  thumbResize,
})

const main = async ({ contentSource }) => {
  try {
    emptyDirs()
    const files = await fs.promises.readdir(contentSource, {
      withFileTypes: true,
    })

    for (const file of files) {
      if (file.isFile()) {
        const fileInputPath = path.join(contentSource, file.name)
        const fileBuffer = await fs.promises.readFile(fileInputPath)
        await Promise.all([
          processJpg({ fileBuffer, file: file.name }),
          processWebp({ fileBuffer, file: file.name }),
          processAvif({ fileBuffer, file: file.name }),
        ])
      }
    }
  } catch (error) {
    console.error(error)
  }
}

main({ contentSource: IMAGE_CONTENT_SOURCE })
  .then(console.info)
  .catch(console.error)
