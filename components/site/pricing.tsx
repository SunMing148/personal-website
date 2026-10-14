import { SectionHeading } from "@/components/site/section-heading"
import { site } from "@/lib/photos"

const tiers = [
  {
    name: "Portrait sitting",
    price: "from $380",
    includes: [
      "90 minutes, one location",
      "30 finished photographs",
      "Print-ready files, hand-toned",
    ],
  },
  {
    name: "Half day",
    price: "from $780",
    includes: [
      "Up to 5 hours, two locations",
      "80 finished photographs",
      "One small print, framed",
    ],
  },
  {
    name: "Full day",
    price: "from $1,400",
    includes: [
      "Up to 9 hours, travel included",
      "200+ finished photographs",
      "A box of ten prints",
    ],
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 border-t py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="pricing-heading"
          label="Pricing"
          title="What a sitting costs"
        />
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Three ways in. Each one starts with a short conversation and can be
          shaped to what you have in mind.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 md:divide-x">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col py-8 first:pt-0 last:pb-0 md:px-10 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="font-heading text-2xl font-medium tracking-tight">
                {tier.name}
              </h3>
              <p className="mt-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {tier.price}
              </p>
              <ul className="mt-8 flex-1">
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    className="border-t py-3 text-sm leading-relaxed last:border-b"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  `Enquiry — ${tier.name}`
                )}`}
                className="mt-8 text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Enquire about this
              </a>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Prices are starting points, not walls. Travel, prints, and rush
          delivery can all be added — it starts with an email.
        </p>
      </div>
    </section>
  )
}
