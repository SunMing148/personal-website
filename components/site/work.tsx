import Image from "next/image"

import { SectionHeading } from "@/components/site/section-heading"
import { gallery } from "@/lib/photos"
import { cn } from "@/lib/utils"

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-t py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="work-heading"
            label="Selected work"
            title="A few frames"
          />
          <p className="pb-1 text-sm text-muted-foreground">
            A short selection — more on request.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {gallery.map((photo) => (
            <figure key={photo.src} className={cn("group", photo.span)}>
              <div
                className={cn(
                  "relative overflow-hidden border border-border",
                  photo.ratio
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={photo.sizes}
                  className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-sm">{photo.title}</span>
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {photo.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
