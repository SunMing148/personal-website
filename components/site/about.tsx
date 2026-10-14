import Image from "next/image"

import { SectionHeading } from "@/components/site/section-heading"
import { portraitPhoto, site } from "@/lib/photos"

const subjects = [
  { name: "Portraits", note: "people at ease, in their own light" },
  { name: "Landscape", note: "high, open, patient places" },
  { name: "Street", note: "cities in their off hours" },
  { name: "Still life", note: "small arrangements, found or made" },
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-10">
        <figure className="md:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <Image
              src={portraitPhoto.src}
              alt={portraitPhoto.alt}
              fill
              sizes="(min-width: 1152px) 341px, (min-width: 768px) 31vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
        <div className="md:col-span-7 md:col-start-6">
          <SectionHeading id="about-heading" label="About" title="Who I am" />
          <div className="mt-8 space-y-5 text-base leading-relaxed">
            <p>
              I&rsquo;m {site.name.split(" ")[0]}. I photograph people and
              places in the light that&rsquo;s already there — no studio, no
              fuss, mostly mornings and late afternoons.
            </p>
            <p>
              The work splits between portraits made slowly, landscapes that ask
              for patience, and streets caught between one thing and the next. I
              like pictures that hold still: one person, one gesture, one
              stretch of weather.
            </p>
            <p>
              If that sounds like what you&rsquo;re after, the door is open.
            </p>
          </div>
          <dl className="mt-10">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="flex items-baseline justify-between gap-6 border-t py-3 last:border-b"
              >
                <dt className="text-sm font-medium">{subject.name}</dt>
                <dd className="text-right text-sm text-muted-foreground">
                  {subject.note}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
