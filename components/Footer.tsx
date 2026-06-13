const socials = [
  { label: 'Email', href: 'mailto:diwyani.vajpayee@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)]"
      style={{ padding: '48px 60px' }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
        <div>
          <p
            className="text-sm font-semibold tracking-tight"
            style={{ color: 'var(--ink)' }}
          >
            Diwyani Vajpayee
          </p>
          <p
            className="text-[13px] mt-2"
            style={{ color: 'var(--ink-muted)', maxWidth: '280px', lineHeight: 1.6 }}
          >
            Always open to interesting conversations — say hello.
          </p>
          <a
            href="mailto:diwyani.vajpayee@gmail.com"
            className="text-[13px] no-underline inline-block mt-3"
            style={{ color: 'var(--blue)', borderBottom: '1px solid rgba(51,54,163,0.3)' }}
          >
            diwyani.vajpayee@gmail.com
          </a>
        </div>

        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-3"
            style={{ color: 'var(--ink-muted)' }}
          >
            Elsewhere
          </p>
          <ul className="flex flex-col gap-2 list-none">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="footer-link text-[13px] no-underline transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className="text-[11px] mt-12"
        style={{ color: 'var(--ink-muted)' }}
      >
        © {new Date().getFullYear()} Diwyani Vajpayee. All rights reserved.
      </p>
    </footer>
  )
}
