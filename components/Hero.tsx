'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1] as const

type Shape = {
  kind: 'square' | 'circle' | 'rect'
  top: string
  left: string
  size: string
  rotate: number
  z: number
}

// simple grey placeholder shapes that emerge from the card and overlap loosely around it
const shapes: Shape[] = [
  { kind: 'rect',   top: '-130px', left: '-180px', size: '150px', rotate: -9, z: 4 },
  { kind: 'square', top: '40px',   left: '-230px', size: '104px', rotate: 7,  z: 3 },
  { kind: 'circle', top: '-100px', left: '190px',  size: '92px',  rotate: 0,  z: 5 },
  { kind: 'rect',   top: '160px',  left: '-90px',  size: '176px', rotate: 4,  z: 2 },
  { kind: 'square', top: '220px',  left: '160px',  size: '86px',  rotate: -6, z: 3 },
  { kind: 'circle', top: '300px',  left: '-40px',  size: '64px',  rotate: 0,  z: 1 },
  { kind: 'rect',   top: '-60px',  left: '40px',   size: '120px', rotate: -3, z: 1 },
  { kind: 'square', top: '320px',  left: '260px',  size: '70px',  rotate: 8,  z: 2 },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || open) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return

    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5

    x.set(relX * 6)
    y.set(relY * 6)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // scrolling away shrinks the archive back into the card
  useEffect(() => {
    if (!open) return

    const onScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      if (rect.top < -80 || rect.bottom < window.innerHeight * 0.6) {
        setOpen(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  const shapeStyle = (kind: Shape['kind']) => ({
    width: '100%',
    height: '100%',
    background: 'var(--ink-muted)',
    opacity: 0.18,
    borderRadius: kind === 'circle' ? '50%' : kind === 'square' ? '6px' : '4px',
    border: '1px solid var(--border)',
  })

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center min-h-[85vh] px-[60px] py-16 overflow-hidden"
    >
      <div className="relative inline-block">
        <p
          className="text-[13px] lowercase tracking-[0.08em] mb-2"
          style={{ color: 'var(--blue)' }}
        >
          jack of trades, master of fun
        </p>

        <motion.h1
          className="font-bold leading-[0.95]"
          style={{
            color: 'var(--blue)',
            fontSize: 'clamp(56px, 11vw, 140px)',
            letterSpacing: '-0.03em',
            x: springX,
            y: springY,
            opacity: open ? 0.16 : 1,
            transition: 'opacity 0.5s ease',
          }}
        >
          <motion.span
            className="block"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            Diwyani
          </motion.span>
          <motion.span
            className="block"
            style={{ marginLeft: '0.92em' }}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            Vajpayee
          </motion.span>
        </motion.h1>

        <p
          className="absolute -bottom-8 right-0 text-[11px]"
          style={{ color: 'var(--ink-soft)', opacity: open ? 0.16 : 1, transition: 'opacity 0.5s ease' }}
        >
          visual designer @formerly
        </p>

        {/* Card anchor — everything emerges from / collapses back into this */}
        <div
          className="absolute hidden sm:block"
          style={{ top: '-30px', right: '-180px', width: '200px', height: '264px' }}
        >
          <motion.div
            onClick={() => setOpen(!open)}
            className="absolute inset-0 cursor-pointer"
            initial={false}
            whileHover={!open ? { rotate: 0 } : undefined}
            animate={{ rotate: open ? 0 : -6 }}
            transition={{ duration: 0.4, ease: easeOut }}
            style={{
              background: 'var(--ink-muted)',
              opacity: 0.18,
              borderRadius: '3px',
              zIndex: 10,
            }}
          >
            <span style={{ position: 'absolute', top: '14px', left: '38%', width: '14px', height: '1.5px', background: 'var(--ink)', transform: 'rotate(20deg)' }} />
            <span style={{ position: 'absolute', top: '14px', right: '38%', width: '14px', height: '1.5px', background: 'var(--ink)', transform: 'rotate(-20deg)' }} />
          </motion.div>

          {/* Shapes emerge from / collapse into the card's center */}
          <AnimatePresence>
            {open && (
              <>
                {shapes.map((s, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: s.top,
                      left: s.left,
                      width: s.size,
                      height: s.size,
                      zIndex: s.z,
                      transformOrigin: 'center center',
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.15,
                      x: '50%',
                      y: '50%',
                      rotate: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: 0,
                      rotate: s.rotate,
                      transition: {
                        duration: prefersReducedMotion ? 0.25 : 0.7,
                        delay: prefersReducedMotion ? 0 : i * 0.06,
                        ease: easeOut,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.15,
                      x: '50%',
                      y: '50%',
                      rotate: 0,
                      transition: {
                        duration: prefersReducedMotion ? 0.2 : 0.5,
                        delay: prefersReducedMotion ? 0 : (shapes.length - i) * 0.04,
                        ease: easeOut,
                      },
                    }}
                  >
                    <div style={shapeStyle(s.kind)} />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
