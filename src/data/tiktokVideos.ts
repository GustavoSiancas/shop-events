export interface TikTokVideo {
  id: string
  author: string
  url: string
}

export const tiktokVideos: TikTokVideo[] = [
  { id: '7639751543008382226', author: '@accesorios_cc_oficial', url: 'https://www.tiktok.com/@accesorios_cc_oficial/video/7639751543008382226' },
  { id: '7664117420486839560', author: '@accesorios_cc_oficial', url: 'https://www.tiktok.com/@accesorios_cc_oficial/video/7664117420486839560' },
  { id: '7663946452158156050', author: '@accesorios_cc_oficial', url: 'https://www.tiktok.com/@accesorios_cc_oficial/video/7663946452158156050' },
  { id: '7676747512731979016', author: '@accesorios_cc_oficial', url: 'https://www.tiktok.com/@accesorios_cc_oficial/video/7676747512731979016' },
  { id: '7658872647668747527', author: '@accesorios_cc_oficial', url: 'https://www.tiktok.com/@accesorios_cc_oficial/video/7658872647668747527' },
  { id: '7647401846453161223', author: '@accesorios_cc_oficial', url: 'https://www.tiktok.com/@accesorios_cc_oficial/video/7647401846453161223' },
]

export const getTikTokEmbedUrl = (id: string) =>
  `https://www.tiktok.com/player/v1/${id}?autoplay=1&loop=1&muted=1&music_info=0&description=0&rel=0&controls=1`
