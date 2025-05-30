export interface SimpleImage {
  id: number
  alt: string
  url: string
  thumbnailURL: string | null
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  focalX: number
  focalY: number
}

export interface HeroBannerType {
  id: number
  image: SimpleImage
  imageMobile: SimpleImage
}