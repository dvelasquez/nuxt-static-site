export interface ImageContent {
  url: string
  media: string
}

export type ResponsiveImageContent = {
  [key in 'jpg' | 'webp' | 'avif']: {
    w1920: ImageContent
    w1280: ImageContent
    w640: ImageContent
    w320: ImageContent
  }
}

export const getImageThumbnails = (
  imagePath: string,
  imageName: string
): ResponsiveImageContent => {
  return {
    jpg: {
      w1920: {
        url: `${imagePath}/jpg/thumbnails/${imageName}_1920w.jpg`,
        media: '(min-width:1921px)',
      },
      w1280: {
        url: `${imagePath}/jpg/thumbnails/${imageName}_1280w.jpg`,
        media: '(min-width: 1281) and (max-width: 1920px)',
      },
      w640: {
        url: `${imagePath}/jpg/thumbnails/${imageName}_640w.jpg`,
        media: '(min-width: 641) and (max-width: 1280px)',
      },
      w320: {
        url: `${imagePath}/jpg/thumbnails/${imageName}_320w.jpg`,
        media: '(max-width: 640px)',
      },
    },
    webp: {
      w1920: {
        url: `${imagePath}/webp/thumbnails/${imageName}_1920w.webp`,
        media: '(min-width:1921px)',
      },
      w1280: {
        url: `${imagePath}/webp/thumbnails/${imageName}_1280w.webp`,
        media: '(min-width: 1281) and (max-width: 1920px)',
      },
      w640: {
        url: `${imagePath}/webp/thumbnails/${imageName}_640w.webp`,
        media: '(min-width: 641) and (max-width: 1280px)',
      },
      w320: {
        url: `${imagePath}/webp/thumbnails/${imageName}_320w.webp`,
        media: '(max-width: 640px)',
      },
    },
    avif: {
      w1920: {
        url: `${imagePath}/avif/thumbnails/${imageName}_1920w.avif`,
        media: '(min-width:1921px)',
      },
      w1280: {
        url: `${imagePath}/avif/thumbnails/${imageName}_1280w.avif`,
        media: '(min-width: 1281) and (max-width: 1920px)',
      },
      w640: {
        url: `${imagePath}/avif/thumbnails/${imageName}_640w.avif`,
        media: '(min-width: 641) and (max-width: 1280px)',
      },
      w320: {
        url: `${imagePath}/avif/thumbnails/${imageName}_320w.avif`,
        media: '(max-width: 640px)',
      },
    },
  }
}

export const getImageFull = (
  imagePath: string,
  imageName: string
): ResponsiveImageContent => {
  return {
    jpg: {
      w1920: {
        url: `${imagePath}/jpg/full/${imageName}_1920w.jpg`,
        media: '(min-width:1921px)',
      },
      w1280: {
        url: `${imagePath}/jpg/full/${imageName}_1280w.jpg`,
        media: '(min-width: 1281) and (max-width: 1920px)',
      },
      w640: {
        url: `${imagePath}/jpg/full/${imageName}_640w.jpg`,
        media: '(min-width: 641) and (max-width: 1280px)',
      },
      w320: {
        url: `${imagePath}/jpg/full/${imageName}_320w.jpg`,
        media: '(max-width: 640px)',
      },
    },
    webp: {
      w1920: {
        url: `${imagePath}/webp/full/${imageName}_1920w.webp`,
        media: '(min-width:1921px)',
      },
      w1280: {
        url: `${imagePath}/webp/full/${imageName}_1280w.webp`,
        media: '(min-width: 1281) and (max-width: 1920px)',
      },
      w640: {
        url: `${imagePath}/webp/full/${imageName}_640w.webp`,
        media: '(min-width: 641) and (max-width: 1280px)',
      },
      w320: {
        url: `${imagePath}/webp/full/${imageName}_320w.webp`,
        media: '(max-width: 640px)',
      },
    },
    avif: {
      w1920: {
        url: `${imagePath}/avif/full/${imageName}_1920w.avif`,
        media: '(min-width:1921px)',
      },
      w1280: {
        url: `${imagePath}/avif/full/${imageName}_1280w.avif`,
        media: '(min-width: 1281) and (max-width: 1920px)',
      },
      w640: {
        url: `${imagePath}/avif/full/${imageName}_640w.avif`,
        media: '(min-width: 641) and (max-width: 1280px)',
      },
      w320: {
        url: `${imagePath}/avif/full/${imageName}_320w.avif`,
        media: '(max-width: 640px)',
      },
    },
  }
}
