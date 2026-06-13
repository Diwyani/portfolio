'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <nav className="nav-surface sticky top-0 z-50 flex items-center justify-between px-[60px] h-14 border-b border-[var(--border)] backdrop-blur-md">
      <Link href="/" className="text-sm font-semibold tracking-tight text-[var(--ink)] no-underline">
        Diwyani Vajpayee
      </Link>
      <ul className="flex gap-7 list-none items-center">
        {['Work', 'About', 'Contact'].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}
              className="text-[13px] text-[var(--ink-muted)] no-underline relative group transition-colors hover:text-[var(--blue)]">
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[var(--blue)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <a href="/DiwyaniVajpayeeResume.pdf" target="_blank"
            className="text-[13px] text-[var(--ink-muted)] no-underline transition-colors hover:text-[var(--blue)]">
            Resume
          </a>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  )
}
