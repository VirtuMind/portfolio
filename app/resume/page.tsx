"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { BackLink } from "@/components/back-link";
import { useLanguage } from "@/lib/language-provider";
import { getTranslations, type Language } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PDFViewer from "@/components/pdf-viewer";

const resumeUrls: Record<Language, string> = {
  en: "/resume-en.pdf",
  fr: "/resume-fr.pdf",
  de: "/resume-de.pdf",
};

export default function ResumePage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [selectedLang, setSelectedLang] = useState<Language>(language);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrls[selectedLang];
    link.download = `KHOUBAZ_YOUNES_RESUME_${selectedLang.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container max-w-3xl mx-auto">
      <BackLink />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 ">
        <h1 className="font-mono text-4xl">{t.resume.title}</h1>

        <div className="flex justify-between md:items-center gap-4 ">
          {/* Language Selector */}
          <Select
            value={selectedLang}
            onValueChange={(value) => setSelectedLang(value as Language)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t.resume.selectLanguage} />
            </SelectTrigger>
            <SelectContent className="glass">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={handleDownload}
            className="gap-2 bg-accent hover:bg-accent/90"
          >
            <Download className="h-4 w-4" />
            {t.resume.download}
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="opacity-0 animate-slide-up">
        <PDFViewer pdfUrl={resumeUrls[selectedLang]} />
      </div>
    </div>
  );
}
