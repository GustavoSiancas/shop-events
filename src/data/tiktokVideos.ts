export interface TikTokVideo {
  id: string
  author: string
  url: string
}

export const tiktokVideos: TikTokVideo[] = [
  { id: '7668674115389115668', author: '@vieepgi', url: 'https://www.tiktok.com/@vieepgi/video/7668674115389115668' },
  { id: '7674171320606756109', author: '@tasq8kmsg8', url: 'https://www.tiktok.com/@tasq8kmsg8/video/7674171320606756109' },
  { id: '7655800867349744918', author: '@escardii', url: 'https://www.tiktok.com/@escardii/video/7655800867349744918' },
  { id: '7671341733950655751', author: '@user_foryou536', url: 'https://www.tiktok.com/@user_foryou536/video/7671341733950655751' },
  { id: '7674983940754574599', author: '@francis_h_s28', url: 'https://www.tiktok.com/@francis_h_s28/video/7674983940754574599' },
]

export const getTikTokEmbedUrl = (id: string) =>
  `https://www.tiktok.com/player/v1/${id}?autoplay=1&loop=1&muted=1&music_info=0&description=0&rel=0&controls=1`
