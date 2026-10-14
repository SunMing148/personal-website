import { SectionHeading } from "@/components/site/section-heading"
import { site } from "@/lib/photos"

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="contact-heading"
          label="Contact"
          title="Write to me."
        />
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          I read everything and answer within two days. If you already have a
          date in mind, put it in the subject line.
        </p>
        <p className="mt-12">
          <a
            href={`mailto:${site.email}`}
            className="font-heading text-3xl leading-tight font-medium tracking-tight break-words underline decoration-1 underline-offset-[10px] transition-colors md:text-6xl"
          >
            {site.email}
          </a>
        </p>
      </div>
    </section>
  )
}
