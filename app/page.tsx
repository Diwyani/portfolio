import Nav from '@/components/Nav'
import ProjectCard from '@/components/ProjectCard'
import { workProjects } from '@/lib/data'
import './globals.css'

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="px-[60px] pt-[120px] pb-20 max-w-[1100px]">
        <p className="hero-label">Diwyani Vajpayee</p>
        <h1 className="hero-title">
          Visual Designer with a{' '}
          <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--blue)', fontWeight: 400 }}>
            Product Brain.
          </em>
        </h1>
        <p className="hero-tagline">
          Visual designer with an engineering background who thinks in stories, systems, and sketchbooks.
          4+ years building brand systems, digital products, and industry IP from the ground up.
          <br /><br />
          Currently exploring product design. Always open to interesting conversations —{' '}
          <a href="mailto:diwyani.vajpayee@gmail.com">say hello</a>.
        </p>
        <div className="hero-tags">
          {['Product Designer','Visual Designer','Writer','Brand Designer','Illustrator','Engineer'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="work-section" id="work">
        <div className="section-label">Selected Work</div>
        <div className="work-grid">
          {workProjects.map((p, i) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              desc={p.desc}
              tag={p.tag}
              glyph={p.glyph}
              href={p.href}
              cardClass={p.className}
              rotate={p.rotate}
              comingSoon={p.comingSoon}
              animationDelay={`${(i + 1) * 0.1}s`}
            />
          ))}
        </div>
      </section>

      {/* PRINCIPLES, ABOUT, CONTACT sections — add similarly */}
    </>
  )
}
