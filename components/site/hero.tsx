import Image from "next/image"

import { Button } from "@/components/ui/button"
import { heroPhoto, site } from "@/lib/photos"

export function Hero() {
  return (
    <section id="top" className="pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
          Photographer
        </p>
        <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
          Photographs that hold still.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {site.intro}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button size="lg" className="px-5" render={<a href="#work" />}>
            View selected work
          </Button>
          <a
            href={`mailto:${site.email}`}
            className="text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl px-6 md:mt-24">
        <div className="relative aspect-[3/2] overflow-hidden border border-border md:aspect-[21/9]">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
