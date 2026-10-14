import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Mail01Icon } from "@hugeicons/core-free-icons"

import { ThemeToggle } from "@/components/site/theme-toggle"
import { site } from "@/lib/photos"

const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-heading text-lg font-medium tracking-tight"
        >
          {site.wordmark}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 md:gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <span aria-hidden className="h-4 w-px bg-border" />
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.name}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <HugeiconsIcon icon={Mail01Icon} size={16} />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
