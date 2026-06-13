'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


interface ProjectCardProps {
  title: string
  subtitle: string
  tags: string[]
  href: string | null
  image: string | null
  comingSoon?: boolean
  external?: string | null
}

export default function ProjectCard({
  title, subtitle, tags, href, image, comingSoon, external
}: ProjectCardProps) {

  const destination = external || href
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '-20% 0px -55% 0px', threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const card = (
    <div ref={ref} className={`project-card ${active ? 'project-card--active' : ''}`}>
      <div className="project-image">
        {image
          ? <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
          : <div className="project-placeholder" />
        }
        {comingSoon && (
          <span className="project-soon-badge">Coming Soon</span>
        )}
        {external && (
          <span className="project-external-badge">↗</span>
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle}</p>
        <div className="project-tags">
          {tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )

  if (destination) {
    return external
      ? <a href={destination} target="_blank" rel="noopener noreferrer" className="project-link">{card}</a>
      : <Link href={destination} className="project-link">{card}</Link>
  }

  return <div className="project-link">{card}</div>
}
