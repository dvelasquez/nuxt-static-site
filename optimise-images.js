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

const transformWebp = ({
  fileBuffer,
  fileOutputPath,
  sizeOptions,
  quality,
}) => {
  return new Promise((resolve, reject) => {
    sharp(fileBuffer)
      .resize(sizeOptions)
      .webp(quality)
      .toFile(fileOutputPath)
      .then(resolve)
      .catch(reject)
  })
}
const transformAvif = ({
  fileBuffer,
  fileOutputPath,
  sizeOptions,
  quality,
}) => {
  return new Promise((resolve, reject) => {
    sharp(fileBuffer)
      .resize(sizeOptions)
      .avif(quality)
      .toFile(fileOutputPath)
      .then(resolve)
      .catch(reject)
  })
}
const transformJpg = ({ fileBuffer, fileOutputPath, sizeOptions, quality }) => {
  return new Promise((resolve, reject) => {
    sharp(fileBuffer)
      .resize(sizeOptions)
      .jpeg(quality)
      .toFile(fileOutputPath)
      .then(resolve)
      .catch(reject)
  })
}

const processWebp = (fileBuffer, file) => {
  try {
    const quality = {
      quality: 60,
    }

    const operations = []
    Object.entries(originalResize).forEach(([key, sizeOptions]) => {
      const convertedFileName = file.replace('.jpg', `_${key}.webp`)
      operations.push({
        fileBuffer,
        fileOutputPath: path.join(IMAGE_CONTENT_WEBP_FULL, convertedFileName),
        sizeOptions,
        quality,
      })
    })
    Object.entries(thumbResize).forEach(([key, sizeOptions]) => {
      const convertedFileName = file.replace('.jpg', `_${key}.webp`)
      operations.push({
        fileBuffer,
        fileOutputPath: path.join(
          IMAGE_CONTENT_WEBP_THUMBNAILS,
          convertedFileName
        ),
        sizeOptions,
        quality,
      })
    })
    return Promise.all(operations.map(transformWebp))
  } catch (error) {
    console.error(error)
  }
}
const processAvif = (fileBuffer, file) => {
  try {
    const quality = {
      quality: 50,
    }
    const operations = []

    Object.entries(originalResize).forEach(([key, sizeOptions]) => {
      const convertedFileName = file.replace('.jpg', `_${key}.avif`)
      operations.push({
        fileBuffer,
        fileOutputPath: path.join(IMAGE_CONTENT_AVIF_FULL, convertedFileName),
        sizeOptions,
        quality,
      })
    })
    Object.entries(thumbResize).forEach(([key, sizeOptions]) => {
      const convertedFileName = file.replace('.jpg', `_${key}.avif`)
      operations.push({
        fileBuffer,
        fileOutputPath: path.join(
          IMAGE_CONTENT_AVIF_THUMBNAILS,
          convertedFileName
        ),
        sizeOptions,
        quality,
      })
    })
    return Promise.all(operations.map(transformAvif))
  } catch (error) {
    console.error(error)
  }
}

const processJpg = (fileBuffer, file) => {
  try {
    const quality = {
      quality: 70,
    }
    const operations = []

    Object.entries(originalResize).forEach(([key, sizeOptions]) => {
      const convertedFileName = file.replace('.jpg', `_${key}.jpg`)
      operations.push({
        fileBuffer,
        fileOutputPath: path.join(IMAGE_CONTENT_JPG_FULL, convertedFileName),
        sizeOptions,
        quality,
      })
    })
    Object.entries(thumbResize).forEach(([key, sizeOptions]) => {
      const convertedFileName = file.replace('.jpg', `_${key}.jpg`)
      operations.push({
        fileBuffer,
        fileOutputPath: path.join(
          IMAGE_CONTENT_JPG_THUMBNAILS,
          convertedFileName
        ),
        sizeOptions,
        quality,
      })
    })
    return Promise.all(operations.map(transformJpg))
  } catch (error) {
    console.error(error)
  }
}

const main = async () => {
  try {
    emptyDirs()
    const files = await fs.promises.readdir(IMAGE_CONTENT_SOURCE, {
      withFileTypes: true,
    })

    for (const file of files) {
      if (file.isFile()) {
        const fileInputPath = path.join(IMAGE_CONTENT_SOURCE, file.name)
        const fileBuffer = await fs.promises.readFile(fileInputPath)
        await Promise.all([
          processJpg(fileBuffer, file.name),
          processWebp(fileBuffer, file.name),
          processAvif(fileBuffer, file.name),
        ])
      }
    }
  } catch (error) {
    console.error(error)
  }
}

main().then(console.info).catch(console.error)
