import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import { workProjects } from '@/lib/data'

export default function Home() {
  return (
    <>
      <Nav />

      <Hero />

      {/* WORK */}
      <section className="work-section" id="work">
        <div className="section-label">Selected Work</div>
        <div className="projects-grid">
          {workProjects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              subtitle={p.subtitle}
              tags={p.tags}
              href={p.href}
              image={p.image}
              comingSoon={p.comingSoon}
              external={p.external}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}