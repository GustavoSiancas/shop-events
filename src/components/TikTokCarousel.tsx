import { ExternalLink, VolumeX } from 'lucide-react'
import { getTikTokEmbedUrl, tiktokVideos } from '../data/tiktokVideos'

export function TikTokCarousel() {
  return <div className="tiktok-gallery">
    {tiktokVideos.map((video) => <article className="tiktok-card" key={video.id}>
      <div className="tiktok-player">
        <iframe
          src={getTikTokEmbedUrl(video.id)}
          title={`TikTok de ${video.author}`}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        <span className="muted-label"><VolumeX size={14}/> Sin sonido</span>
      </div>
      <a href={video.url} target="_blank" rel="noreferrer">
        {video.author}<span>Ver en TikTok <ExternalLink size={14}/></span>
      </a>
    </article>)}
  </div>
}
