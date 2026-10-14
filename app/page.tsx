import { About } from "@/components/site/about"
import { Contact } from "@/components/site/contact"
import { Hero } from "@/components/site/hero"
import { Pricing } from "@/components/site/pricing"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { Work } from "@/components/site/work"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Work />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
