const path = require('path')
const fs = require('fs-extra')
const sharp = require('sharp')

const IMAGE_CONTENT_SOURCE = path.join(__dirname, 'static', 'content', 'places')
const IMAGE_CONTENT_WEBP = path.join(
  __dirname,
  'static',
  'content',
  'places',
  'webp'
)
const IMAGE_CONTENT_JPG = path.join(
  __dirname,
  'static',
  'content',
  'places',
  'jpg'
)

const IMAGE_CONTENT_AVIF = path.join(
  __dirname,
  'static',
  'content',
  'places',
  'avif'
)

const processWebp = (file, fileInputPath) => {
  fs.emptyDirSync(IMAGE_CONTENT_WEBP)
  const fileOutputPathWebp = path.join(
    IMAGE_CONTENT_WEBP,
    file.replace('.jpg', '.webp')
  )
  const fileOutputPathWebp1280w = path.join(
    IMAGE_CONTENT_WEBP,
    file.replace('.jpg', '_1280w.webp')
  )
  const fileOutputPathWebp640w = path.join(
    IMAGE_CONTENT_WEBP,
    file.replace('.jpg', '_640w.webp')
  )
  const fileOutputPathWebp320w = path.join(
    IMAGE_CONTENT_WEBP,
    file.replace('.jpg', '_320w.webp')
  )
  sharp(fileInputPath)
    .webp({ quality: 60 })
    .toFile(fileOutputPathWebp)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 1280 })
    .webp({ quality: 60 })
    .toFile(fileOutputPathWebp1280w)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 640 })
    .webp({ quality: 60 })
    .toFile(fileOutputPathWebp640w)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 320 })
    .webp({ quality: 60 })
    .toFile(fileOutputPathWebp320w)
    .then(console.log)
    .catch(console.error)
}
const processAvif = (file, fileInputPath) => {
  fs.emptyDirSync(IMAGE_CONTENT_AVIF)
  const fileOutputPathAvif = path.join(
    IMAGE_CONTENT_AVIF,
    file.replace('.jpg', '.avif')
  )
  const fileOutputPathAvif1280w = path.join(
    IMAGE_CONTENT_AVIF,
    file.replace('.jpg', '_1280w.avif')
  )
  const fileOutputPathAvif640w = path.join(
    IMAGE_CONTENT_AVIF,
    file.replace('.jpg', '_640w.avif')
  )
  const fileOutputPathAvif320w = path.join(
    IMAGE_CONTENT_AVIF,
    file.replace('.jpg', '_320w.avif')
  )
  sharp(fileInputPath)
    .avif({ quality: 50 })
    .toFile(fileOutputPathAvif)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 1280 })
    .avif({ quality: 50 })
    .toFile(fileOutputPathAvif1280w)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 640 })
    .avif({ quality: 50 })
    .toFile(fileOutputPathAvif640w)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 320 })
    .avif({ quality: 50 })
    .toFile(fileOutputPathAvif320w)
    .then(console.log)
    .catch(console.error)
}

const processJpg = (file, fileInputPath) => {
  fs.emptyDirSync(IMAGE_CONTENT_JPG)
  const fileOutputPathJpg = path.join(IMAGE_CONTENT_JPG, file)
  const fileOutputPathJpg1280w = path.join(
    IMAGE_CONTENT_JPG,
    file.replace('.jpg', '_1280w.jpg')
  )
  const fileOutputPathJpg640w = path.join(
    IMAGE_CONTENT_JPG,
    file.replace('.jpg', '_640w.jpg')
  )
  const fileOutputPathJpgp320w = path.join(
    IMAGE_CONTENT_JPG,
    file.replace('.jpg', '_320w.jpg')
  )

  sharp(fileInputPath)
    .jpeg({ quality: 70, progressive: true })
    .toFile(fileOutputPathJpg)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 1280 })
    .jpeg({ quality: 70, progressive: true })
    .toFile(fileOutputPathJpg1280w)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 640 })
    .jpeg({ quality: 70, progressive: true })
    .toFile(fileOutputPathJpg640w)
    .then(console.log)
    .catch(console.error)

  sharp(fileInputPath)
    .resize({ width: 320 })
    .jpeg({ quality: 70, progressive: true })
    .toFile(fileOutputPathJpgp320w)
    .then(console.log)
    .catch(console.error)
}

fs.promises.readdir(IMAGE_CONTENT_SOURCE).then((files) => {
  fs.emptyDirSync(IMAGE_CONTENT_AVIF)
  files.forEach((file) => {
    const fileInputPath = path.join(IMAGE_CONTENT_SOURCE, file)

    processWebp(file, fileInputPath)
    processJpg(file, fileInputPath)
    processAvif(file, fileInputPath)
  })
})
