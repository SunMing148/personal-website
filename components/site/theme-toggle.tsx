"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Icons swap via CSS, so nothing depends on hydration state. */}
      <HugeiconsIcon icon={Moon02Icon} size={14} className="dark:hidden" />
      <HugeiconsIcon icon={Sun03Icon} size={14} className="hidden dark:block" />
    </Button>
  )
}
