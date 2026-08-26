import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useRef } from 'react'
import { tiktokVideos } from '../data/tiktokVideos'

export function TikTokCarousel() {
  const track = useRef<HTMLDivElement>(null)
  const move = (direction: number) => track.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })
  return <div className="video-carousel"><div className="carousel-controls"><button onClick={() => move(-1)} aria-label="Anterior"><ChevronLeft/></button><button onClick={() => move(1)} aria-label="Siguiente"><ChevronRight/></button></div><div className="video-track" ref={track}>{tiktokVideos.map((video) => <a className="video-card" href={video.url} target="_blank" key={video.id}><img src={video.image} alt={video.title} loading="lazy"/><span className="play"><Play fill="currentColor"/></span><div><small>{video.tag}</small><h3>{video.title}</h3><p>Ver en TikTok →</p></div></a>)}</div></div>
}
