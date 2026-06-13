import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { workProjects } from '@/lib/data'

const sectionStyle: React.CSSProperties = { marginTop: '56px' }
const headingStyle: React.CSSProperties = {
  fontSize: 'clamp(18px, 2.2vw, 24px)',
  fontWeight: 700,
  color: 'var(--blue)',
  letterSpacing: '-0.015em',
  marginBottom: '14px',
}
const bodyStyle: React.CSSProperties = {
  fontSize: '15px',
  color: 'var(--ink-muted)',
  lineHeight: 1.75,
  whiteSpace: 'pre-line',
}

const ihssContent = [
  {
    heading: 'Project Brief',
    body: `Client: Farmley
Project: Indian Healthy Snacking Summit (IHSS 1.0 & 2.0)
My Role: Visual Designer — Creative Direction, Brand Identity, Website, Report Design, Event Collaterals
Timeline: 60 days per edition
The ask: Build an industry IP from scratch. No name, no identity, no precedent. Just a deadline.`,
  },
  {
    heading: 'The Context — Why This Existed',
    body: `India's healthy snacking market is one of the fastest-growing food categories in the country — driven by urbanisation, rising health awareness, and shifting disposable incomes. Farmley didn't just want to sell into this wave. They wanted to own the conversation around it.

IHSS was that bet. An annual summit that would bring together food scientists, Quick Commerce founders, influencers, and industry leaders — anchored by original consumer research that Farmley commissioned, designed, and published.`,
  },
  {
    heading: 'The Constraint That Shaped Everything',
    body: `IHSS had to feel independent of Farmley so that competitors would participate — but it also had to feel unmistakably by Farmley so that Farmley got the brand equity. This wasn't a stylistic choice. It was a strategic constraint that drove every single design decision:

— The abstract IHSS acronym mark (not a Farmley-specific visual)
— Yellow borrowed from Farmley's palette, but not identical to it
— The snack-packet logo shape signals the category without being Farmley's packet

Getting that balance right, in 60 days, across identity + digital + print + event, twice — that's the thing.`,
  },
  {
    heading: 'My Role — IHSS 1.0 vs 2.0',
    body: `Brand Identity — Built from zero (1.0) → Evolved & extended (2.0)
Website Design — Designed & launched (1.0) → Refreshed (2.0)
Research Report — 65-page report (1.0) → Streamlined to 30 pages (2.0)
Survey Respondents — 6,000+ consumers (1.0) → 7,000+ consumers (2.0)
Event Attendees — Industry leaders, New Delhi (1.0) → 2,000+ participants, Bharat Mandapam (2.0)
Newsletter Sign-ups — — (1.0) → 500+ cumulative (2.0)
Report Downloads — 2,000+ (1.0) → — (2.0)
Event Collaterals — ID cards, banners, print (1.0) → Full suite (2.0)
Digital Assets — Invites, social (1.0) → Invites, social (2.0)
Data Visualisation — Yes (1.0) → Yes (2.0)

The key difference: IHSS 1.0 was about building the language. IHSS 2.0 was about sharpening it.`,
  },
  {
    heading: 'The 60-Day Timeline Breakdown',
    body: `Week 1–2 — Research & Identity Foundation
Survey design (25 questions), data collection strategy, brand moodboarding, identity exploration across multiple routes.

Week 3 — Identity Lock & Data Collection Begins
Brand identity finalised. D2C data collection launched — pop-up booths at offices and colleges with free makhana as incentive, WhatsApp campaigns with discount codes, social media pushes with snack samples.

Week 4–5 — Website & Report Architecture
Website designed and launched. Raw data from 6,000+ respondents cleaned and structured. Report narrative written. Slide-by-slide data extraction for design.

Week 6–7 — Report Design
Moodboarding for report visual style. Infographic design. InDesign file built. Sample print and audit.

Week 8 — Event Collaterals & Launch
Final report. All physical and digital event assets. Summit hosted. Report unveiled to industry leaders.`,
  },
  {
    heading: 'The Design Problem That Actually Mattered',
    body: `Anyone can make a report look nice. The harder problem: how do you make 6,000 data points feel human?

Raw numbers don't change minds. So the report was designed as a visual essay — skimmable like a magazine, surprising like a good conversation. The goal was that you'd open it for a quick look and end up reading it cover to cover.

A few findings that shaped the visual storytelling:

— 71% of Indians consider evening snacking inseparable from chai. We leaned into the warmth and ritual of this, not the statistic.
— 9 in 10 want to shift toward mindful eating. Positioned as cultural evolution, not guilt.
— 73% prioritise taste, yet 58% cite cost as the biggest barrier to healthy snacking. This tension became the emotional core of the report.

The data wasn't just visualised. It was editorially sequenced — contradiction to insight, habit to aspiration.`,
  },
  {
    heading: 'The Logo Decision',
    body: `Three routes were explored:

Route 1 — Bar separator between IHSS and the wordmark. Felt too corporate. Read like a conference badge, not a movement.

Route 2 — Outline packet shape framing the acronym. Ownable, but too fragile at small sizes. Wouldn't hold up on a 3-metre event backdrop.

Route 3 (chosen) — Bold filled snack-packet shape with a slight flag-wave distortion. Works at 16px on a digital badge and at 3 metres on a stage backdrop. The shape references the category without being any specific brand's packet. The distortion adds energy without feeling casual.

The snack-packet form also solved the strategic constraint: it signals the healthy snacking category without being tied to Farmley's own packaging.`,
  },
  {
    heading: 'Events & Coverage',
    body: `IHSS 1.0 — July 6, 2024 | India Habitat Centre, New Delhi
The inaugural summit brought together influencers, investors, startup founders, and industry experts — including Revant Himatsingka (Food Pharmer), the co-founder of Swiggy, and heads of Blinkit and Amazon's category teams.

Recognised by APEDA, Ministry of Commerce, Government of India — a significant credibility marker for a first-edition event.

The Healthy Snacking Report received widespread coverage across all major national newspapers and top media outlets.

IHSS 2.0 — July 18, 2025 | Bharat Mandapam, New Delhi
The second edition brought together 1,500+ stakeholders from the food and beverage ecosystem — 50+ speakers, 300 startups, investors, policymakers, and retail buyers.

Special Guest: Shri Chirag Paswan, Cabinet Minister of Food Processing Industries.

The venue shift from India Habitat Centre to Bharat Mandapam tells the scale story on its own.`,
  },
  {
    heading: 'The Impact',
    body: `— 2,000+ report downloads, cited in industry presentations across the country
— 13,000+ total survey respondents across both editions
— 500+ cumulative newsletter sign-ups
— Recognised by APEDA, Ministry of Commerce, Government of India
— Covered in Business Standard, YourStory, The Print, BW Healthcare World, Bakery & Snacks, and more
— IHSS 2.0 commissioned — the clearest signal the model worked

IHSS positioned Farmley as a thought leader in a category they already dominated commercially. It created a reason for the whole industry to pay attention to them.`,
  },
  {
    heading: "What I'd Do Differently",
    body: `I'd push earlier for a defined measurement framework. We had download numbers and attendee counts, but no way to measure whether the "feels independent of Farmley" perception goal was actually achieved. For IHSS 2.0, I'd have proposed a simple post-event survey: "Who did you think organised this event?"

The 60-day timeline also meant some report pages were designed before all the data was final. A hard data-lock date earlier in the process would have allowed more considered infographic choices — less last-minute pivoting on layouts.`,
  },
]

const recipeContent = [
  {
    heading: 'Project Brief',
    body: `Client: Personal Project — Recipe Website
My Role: Visual Designer & Design Engineer — Creative Direction, UI Design, Frontend Development, Database Architecture
Timeline: 2 weeks, June 2025
The ask: Build a personal recipe book as a fully functional web app — not a prototype, not a mockup. A real product connected to a live database, designed and developed entirely by a designer without a dedicated developer.

📸 Add: A clean hero screenshot of the finished site at localhost or Vercel URL`,
  },
  {
    heading: 'The Context',
    body: `This project started as a personal challenge and became something more useful — proof that a designer with systems thinking and a CS background can own the full arc of a product, from brief to build.

The recipe book needed to feel personal, not generic. Warm meals, hosting memories, kitchen instinct — the kind of food content that lives in notebooks and group chats, not SEO-optimised recipe sites. The design direction came from that: handmade, editorial, physical. A site that feels like pulling a recipe card out of a box rather than opening a tab.

The secondary goal was deliberate skill-building. Learning React, Next.js, TypeScript, and Supabase not through tutorials but through a real project with real errors and real decisions.

📸 Add: Your Figma exploration screenshot showing early layout options`,
  },
  {
    heading: 'The Approach — Starting in Figma, Finishing in Code',
    body: `The design began with three layout options explored in Figma. The chosen direction — yellow and navy, Barrio font for headings, Syne for body, organic card shapes, polaroid stack — was specific enough to have a clear personality but flexible enough to evolve during development.

The transition from Figma to code revealed the central tension of design engineering: what takes 5 seconds to place in Figma can take 40 lines of code to approximate. A 2 degree rotation. A slightly oversized letter. A card that feels physically placed, not rendered. Every human element required deliberate technical decisions.

📸 Add: Side by side — Figma frame vs localhost screenshot of the same element`,
  },
  {
    heading: 'The Polaroid Interaction',
    body: `The homepage features a stacked polaroid component — a photo card on top, a blue pantry card behind it. On hover: photos transition from greyscale to colour, the pantry card slides up from behind with a 300ms delay, and its z-index flips so it partially overlaps the photo card as it rises.

This required three separate pieces of React state — hovered, pantryRaised, and pantryOnTop — each on its own timer, each controlling a different part of the animation. The result is a single interaction that feels physical and sequential rather than mechanical.

📸 Add: Screen recording or two screenshots — resting state vs hovered state of the polaroid`,
  },
  {
    heading: 'Typography as Texture',
    body: `"RECIPE BOOK" in the hero is not typeset — each letter is its own element with individual rotation and vertical offset values. R tilts -2 degrees and sits 4px down. The two O's in BOOK are a size larger than B and K. The effect reads as hand-placed, like letters cut out and arranged on a surface.

📸 Add: Close-up screenshot of the scattered heading`,
  },
  {
    heading: 'The Modal as a Physical Object',
    body: `Recipe cards open a modal designed to feel like pulling a card from a recipe box — not a UI component. Background colour is #FFF8EC, warm cream not white. A 0.5 degree rotation makes it feel placed. CSS SVG noise at 3.5% opacity adds paper grain. Ruled lines sit behind the instructions text. Ingredient bullets are em dashes, not dots.

None of these decisions are dramatic individually. Together they shift the modal from interface to object.

📸 Add: Screenshot of the open modal — ideally with a recipe that has content filled in`,
  },
  {
    heading: 'Database Architecture',
    body: `Two Supabase tables — recipes and pantry. The recipes table holds title, slug, image URL, ingredients as JSONB, instructions, time, cost in rupees, calories, and category. The pantry table holds items typed as either restock or leftover.

A deliberate separation was made early: shape classes and visual layout decisions stay in the frontend, keyed by slug in a shapeMap object. The database holds content, not design. This means redesigning the layout never requires touching the database.

📸 Add: Screenshot of your Supabase table editor showing the recipes table with data`,
  },
  {
    heading: 'Errors as Teachers',
    body: `Three errors worth documenting:

Module not found: Can't resolve '@/lib/supabase' — the lib folder didn't exist yet. Created the folder, created the file, error gone. Taught me: the @ symbol means project root.

Invalid hook call — useState placed outside the component function. Taught me: hooks only live inside function bodies, never at file level.

Recipe is not defined — button using recipe.title outside the .map() loop where recipe exists. Taught me: scope. Variables only exist where they're defined.

📸 Add: Screenshots of the actual error screens from your terminal or browser`,
  },
  {
    heading: 'The Outcome',
    body: `A fully functional recipe book web app — live database, search and category filters, animated interactions, and a paper-textured recipe card modal — built entirely by a designer in two weeks.

The technical stack: Next.js 16, TypeScript, Tailwind CSS, Supabase.

What this project proved: design thinking transfers directly to engineering decisions. Which fields belong in the database. Where logic lives in frontend versus backend. What a modal should feel like physically. These are not engineering questions. They are design questions that happen to require code to answer.

The fidelity gap — the distance between a Figma file and a working product — closes with every build. This project closed it significantly.

What comes next: real food photography, five more recipes with full content, deployment to Vercel, and a second build applying everything learned here.

📸 Add: Final full-page screenshot of the deployed site`,
  },
]

// Generic placeholder case-study sections for projects without final copy yet —
// mirrors the IHSS structure so every project page reads consistently.
function placeholderContent(title: string) {
  return [
    {
      heading: 'Project Brief',
      body: `Client: —
Project: ${title}
My Role: Visual Designer — Creative Direction & Design
Timeline: —
The ask: Placeholder text — final brief and project context to be added here.`,
    },
    {
      heading: 'The Context',
      body: `Placeholder text. A short note on why this project existed, who it was for, and the problem it set out to solve will live here.`,
    },
    {
      heading: 'The Approach',
      body: `Placeholder text. This section will walk through the thinking, the process, and the key decisions that shaped the final direction.`,
    },
    {
      heading: 'The Outcome',
      body: `Placeholder text. Results, learnings, and impact of the project will be added here once finalised.`,
    },
  ]
}

export function generateStaticParams() {
  return workProjects.map((p) => ({ id: p.id }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = workProjects.find((p) => p.id === id)
  if (!project) notFound()

  return (
    <>
      <Nav />
      <section style={{ padding: '64px 24px 100px', maxWidth: '880px', margin: '0 auto' }}>
        <Link
          href="/#work"
          style={{ fontSize: '13px', color: 'var(--ink-muted)', textDecoration: 'none' }}
        >
          ← back to work
        </Link>

        {/* Placeholder image */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16/10',
            background: 'var(--ink-muted)',
            opacity: 0.18,
            borderRadius: '6px',
            marginTop: '32px',
          }}
        />

        {/* Centered text block */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: 'var(--blue)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            {project.title}
          </h1>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '18px',
            }}
          >
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          <p
            style={{
              fontSize: '15px',
              color: 'var(--ink-muted)',
              maxWidth: '560px',
              margin: '24px auto 0',
              lineHeight: 1.7,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Long-form case study content */}
        <div style={{ marginTop: '24px' }}>
          {(project.id === 'ihss'
            ? ihssContent
            : project.id === 'recipe'
              ? recipeContent
              : placeholderContent(project.title)
          ).map((s) => (
            <div key={s.heading} style={sectionStyle}>
              <h2 style={headingStyle}>{s.heading}</h2>
              <p style={bodyStyle}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
