import { site } from "@/lib/photos"

export function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          {site.email}
        </a>
        <p className="font-mono text-[11px] tracking-widest uppercase">
          Placeholder photographs via Unsplash
        </p>
      </div>
    </footer>
  )
}
