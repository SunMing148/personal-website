/**
 * All site content that you should replace with your own.
 *
 * Every placeholder photograph is an Unsplash URL. To use one of your
 * photographs instead: put the file in `public/photos/` and set `src` to
 * `/photos/your-file.jpg` (drop the query string). Nothing else changes.
 */

export const site = {
  name: "Alex Lane",
  wordmark: "Alex Lane",
  email: "hello@example.com",
  intro: "Portraits, landscapes, and quiet streets — made in available light.",
}

/** Full-bleed image behind the opening section. */
export const heroPhoto = {
  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80",
  alt: "Mountains under a star-filled night sky, moonlight on the snow",
}

/** Portrait shown beside the introduction. */
export const portraitPhoto = {
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
  alt: "Portrait of the photographer in soft window light",
}

export type GalleryPhoto = {
  src: string
  alt: string
  title: string
  category: string
  /** Tailwind column span at `md` and up (12-column grid). */
  span: string
  /** Tailwind aspect-ratio class for the frame. */
  ratio: string
  /** `sizes` for next/image, matching the column span. */
  sizes: string
}

/** The selected-work grid, top to bottom, left to right. */
export const gallery: GalleryPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=80",
    alt: "Snow-capped mountain at first light, pink sky above the valley",
    title: "First light, high valley",
    category: "Landscape",
    span: "md:col-span-7",

    ratio: "aspect-[3/2]",

    sizes: "(min-width: 1152px) 634px, (min-width: 768px) 58vw, 100vw",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    alt: "A woman smiling quietly, warm light, plain background",
    title: "Between takes",
    category: "Portrait",
    span: "md:col-span-5",

    ratio: "aspect-[4/5]",

    sizes: "(min-width: 1152px) 446px, (min-width: 768px) 42vw, 100vw",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    alt: "Fog drifting over forested ridges at dawn",
    title: "Ridge in fog",
    category: "Landscape",
    span: "md:col-span-4",

    ratio: "aspect-square",

    sizes: "(min-width: 1152px) 352px, (min-width: 768px) 33vw, 100vw",
  },
  {
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=80",
    alt: "Neon signs reflecting on a wet street after dark",
    title: "Neon, after rain",
    category: "Street",
    span: "md:col-span-8",

    ratio: "aspect-[3/2]",

    sizes: "(min-width: 1152px) 728px, (min-width: 768px) 66vw, 100vw",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    alt: "A man in a dark suit, natural light, calm expression",
    title: "Sunday suit",
    category: "Portrait",
    span: "md:col-span-5",

    ratio: "aspect-[4/5]",

    sizes: "(min-width: 1152px) 446px, (min-width: 768px) 42vw, 100vw",
  },
  {
    src: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&w=1800&q=80",
    alt: "A taxi crossing a rainy city street at dusk",
    title: "Crosstown, 11 p.m.",
    category: "Street",
    span: "md:col-span-7",

    ratio: "aspect-[3/2]",

    sizes: "(min-width: 1152px) 634px, (min-width: 768px) 58vw, 100vw",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "A table set with linen and glasses before a celebration",
    title: "Table before the toast",
    category: "Still life",
    span: "md:col-span-4",

    ratio: "aspect-[3/4]",

    sizes: "(min-width: 1152px) 352px, (min-width: 768px) 33vw, 100vw",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80",
    alt: "A still lake at sunrise, mountains mirrored in the water",
    title: "Cold lake, warm hour",
    category: "Landscape",
    span: "md:col-span-8",

    ratio: "aspect-[3/2]",

    sizes: "(min-width: 1152px) 728px, (min-width: 768px) 66vw, 100vw",
  },
]
