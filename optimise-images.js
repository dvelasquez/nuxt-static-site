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

fs.promises.readdir(IMAGE_CONTENT_SOURCE).then((files) => {
  fs.emptyDirSync(IMAGE_CONTENT_WEBP)
  fs.emptyDirSync(IMAGE_CONTENT_JPG)
  files.forEach((file) => {
    const fileInputPath = path.join(IMAGE_CONTENT_SOURCE, file)
    const fileOutputPathWebp = path.join(
      IMAGE_CONTENT_WEBP,
      file.replace('.jpg', '.webp')
    )
    const fileOutputPathWebp1280w = path.join(
      IMAGE_CONTENT_WEBP,
      file.replace('.jpg', '_1280w.webp')
    )
    const fileOutputPathWebp768w = path.join(
      IMAGE_CONTENT_WEBP,
      file.replace('.jpg', '_768w.webp')
    )
    const fileOutputPathWebp400w = path.join(
      IMAGE_CONTENT_WEBP,
      file.replace('.jpg', '_400w.webp')
    )
    sharp(fileInputPath)
      .webp({ quality: 70 })
      .toFile(fileOutputPathWebp)
      .then(console.log)
      .catch(console.error)

    sharp(fileInputPath)
      .resize({ width: 1280 })
      .webp({ quality: 70 })
      .toFile(fileOutputPathWebp1280w)
      .then(console.log)
      .catch(console.error)

    sharp(fileInputPath)
      .resize({ width: 768 })
      .webp({ quality: 70 })
      .toFile(fileOutputPathWebp768w)
      .then(console.log)
      .catch(console.error)

    sharp(fileInputPath)
      .resize({ width: 400 })
      .webp({ quality: 70 })
      .toFile(fileOutputPathWebp400w)
      .then(console.log)
      .catch(console.error)

    const fileOutputPathJpg = path.join(IMAGE_CONTENT_JPG, file)
    const fileOutputPathJpg1280w = path.join(
      IMAGE_CONTENT_JPG,
      file.replace('.jpg', '_1280w.jpg')
    )
    const fileOutputPathJpg768w = path.join(
      IMAGE_CONTENT_JPG,
      file.replace('.jpg', '_768w.jpg')
    )
    const fileOutputPathJpgp400w = path.join(
      IMAGE_CONTENT_JPG,
      file.replace('.jpg', '_400w.jpg')
    )

    sharp(fileInputPath)
      .jpeg({ quality: 70 })
      .toFile(fileOutputPathJpg)
      .then(console.log)
      .catch(console.error)

    sharp(fileInputPath)
      .resize({ width: 1280 })
      .jpeg({ quality: 70 })
      .toFile(fileOutputPathJpg1280w)
      .then(console.log)
      .catch(console.error)

    sharp(fileInputPath)
      .resize({ width: 768 })
      .jpeg({ quality: 70 })
      .toFile(fileOutputPathJpg768w)
      .then(console.log)
      .catch(console.error)

    sharp(fileInputPath)
      .resize({ width: 400 })
      .jpeg({ quality: 70 })
      .toFile(fileOutputPathJpgp400w)
      .then(console.log)
      .catch(console.error)
  })
})
