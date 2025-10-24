"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Language } from "@/lib/translations";
import PDFViewer from "./pdf-viewer";

const resumeUrls: Record<Language, string> = {
  en: "/KHOUBAZ_YOUNES_RESUME_EN.pdf",
  fr: "/KHOUBAZ_YOUNES_RESUME_FR.pdf",
  de: "/KHOUBAZ_YOUNES_RESUME_DE.pdf",
};

type Props = {
  initialLanguage: Language;
  translations: {
    title: string;
    selectLanguage: string;
    download: string;
  };
};

export function ResumeViewer({ initialLanguage, translations }: Props) {
  const [selectedLang, setSelectedLang] = useState<Language>(initialLanguage);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrls[selectedLang];
    link.download = resumeUrls[selectedLang].split("/")[1];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex justify-between md:items-center gap-4 md:ml-auto">
          {/* Language Selector */}
          <Select
            value={selectedLang}
            onValueChange={(value) => setSelectedLang(value as Language)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={translations.selectLanguage} />
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
            {translations.download}
          </Button>
        </div>
      </div>

      <PDFViewer pdfUrl={resumeUrls[selectedLang]} language={selectedLang} />
    </>
  );
}
