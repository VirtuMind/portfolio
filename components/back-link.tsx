"use client"

import { useRouter } from "next/navigation"

export function BackLink() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="mb-8 cursor-pointer text-muted-foreground hover:text-accent transition-colors"
    >
      &gt; cd ..
    </button>
  )
}
