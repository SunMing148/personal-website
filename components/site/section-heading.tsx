import { cn } from "@/lib/utils"

export function SectionHeading({
  id,
  label,
  title,
  className,
}: {
  id?: string
  label: string
  title: string
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
        {label}
      </p>
      <h2
        id={id}
        className="mt-4 font-heading text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl"
      >
        {title}
      </h2>
    </div>
  )
}
