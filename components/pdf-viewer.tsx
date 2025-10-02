"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface PDFViewerProps {
  pdfUrl: string
}

export function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-[800px] rounded-lg overflow-hidden glass">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
      )}
      <iframe src={pdfUrl} className="w-full h-full border-0" title="Resume PDF" onLoad={() => setIsLoading(false)} />
    </div>
  )
}
