"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Header } from "@/components/header"
import { BackLink } from "@/components/back-link"
import { PDFViewer } from "@/components/pdf-viewer"
import { useLanguage } from "@/lib/language-provider"
import { getTranslations, type Language } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const resumeUrls: Record<Language, string> = {
  en: "/placeholder.svg?height=1000&width=800",
  fr: "/placeholder.svg?height=1000&width=800",
  de: "/placeholder.svg?height=1000&width=800",
}

export default function ResumePage() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const [selectedLang, setSelectedLang] = useState<Language>(language)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = resumeUrls[selectedLang]
    link.download = `resume-${selectedLang}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto">
          <BackLink />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h1 className="font-mono text-4xl md:text-5xl font-bold">{t.resume.title}</h1>

            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <Select value={selectedLang} onValueChange={(value) => setSelectedLang(value as Language)}>
                <SelectTrigger className="w-[180px] glass cursor-pointer">
                  <SelectValue placeholder={t.resume.selectLanguage} />
                </SelectTrigger>
                <SelectContent className="glass cursor-pointer">
                  <SelectItem value="en" className="cursor-pointer">
                    English
                  </SelectItem>
                  <SelectItem value="fr" className="cursor-pointer">
                    Français
                  </SelectItem>
                  <SelectItem value="de" className="cursor-pointer">
                    Deutsch
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={handleDownload} className="gap-2 bg-accent hover:bg-accent/90 cursor-pointer">
                <Download className="h-4 w-4" />
                {t.resume.download}
              </Button>
            </div>
          </div>

          {/* PDF Viewer */}
          <PDFViewer pdfUrl={resumeUrls[selectedLang]} />
        </div>
      </main>
    </div>
  )
}
