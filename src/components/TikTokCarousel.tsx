import { ChevronLeft, ChevronRight, ExternalLink, VolumeX } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { getTikTokEmbedUrl, tiktokVideos } from '../data/tiktokVideos'

export function TikTokCarousel() {
  const track = useRef<HTMLDivElement>(null)
  const paused = useRef(false)
  const lastFrame = useRef<number | null>(null)

  const move = (direction: number) => {
    const element = track.current
    if (!element) return
    const atEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth - 20
    if (direction > 0 && atEnd) element.scrollTo({ left: 0, behavior: 'smooth' })
    else element.scrollBy({ left: direction * Math.min(345, element.clientWidth), behavior: 'smooth' })
  }

  useEffect(() => {
    let frameId = 0
    const speed = 28

    const animate = (time: number) => {
      const element = track.current
      if (lastFrame.current === null) lastFrame.current = time
      const elapsed = Math.min(time - lastFrame.current, 50)
      lastFrame.current = time

      if (element && !paused.current) {
        element.scrollLeft += speed * elapsed / 1000
        if (element.scrollLeft + element.clientWidth >= element.scrollWidth - 2) {
          element.scrollLeft = 0
        }
      }
      frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return <div className="video-carousel" onMouseEnter={() => { paused.current = true }} onMouseLeave={() => { paused.current = false }}>
    <div className="carousel-controls">
      <button onClick={() => move(-1)} aria-label="Video anterior"><ChevronLeft/></button>
      <button onClick={() => move(1)} aria-label="Video siguiente"><ChevronRight/></button>
    </div>
    <div className="tiktok-gallery" ref={track} onTouchStart={() => { paused.current = true }} onTouchEnd={() => { paused.current = false }}>
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
    </article>)}</div>
  </div>
}
