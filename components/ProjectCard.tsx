import Link from 'next/link'

interface ProjectCardProps {
  title: string
  desc: string
  tag: string
  glyph: string
  href: string | null
  cardClass: string
  rotate: string
  comingSoon?: boolean
  animationDelay: string
}

export default function ProjectCard({
  title, desc, tag, glyph, href, cardClass, rotate, comingSoon, animationDelay
}: ProjectCardProps) {
  const cardStyle = {
    '--r': rotate,
    animationDelay,
    transform: `rotate(${rotate})`,
  } as React.CSSProperties

  const inner = (
    <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-8">
      <div className="flex items-start justify-between">
        <span className={`card-platform-tag ${cardClass}-tag`}>{tag}</span>
        {comingSoon
          ? <span className="coming-soon-badge">Coming Soon</span>
          : <span className="card-arrow">↗</span>
        }
      </div>
      <div>
        <div className="card-headline whitespace-pre-line">{title}</div>
        <div className="card-desc">{desc}</div>
      </div>
    </div>
  )

  const classes = `case-card ${cardClass} ${comingSoon ? 'mito-soon' : ''}`

  return href ? (
    <Link href={href} className={classes} style={cardStyle}>
      <div className="card-dots" />
      <div className="card-glyph">{glyph}</div>
      {inner}
      <div className="card-accent-line" />
    </Link>
  ) : (
    <div className={classes} style={cardStyle}>
      <div className="card-dots" />
      <div className="card-glyph">{glyph}</div>
      {inner}
      <div className="card-accent-line" />
    </div>
  )
}