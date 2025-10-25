import { BackLink } from "@/components/back-link";
import { getLanguage } from "@/lib/cookies";
import { getTranslations } from "@/lib/translations";
import { ResumeViewer } from "@/components/resume-viewer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume of Younes Khoubaz",
  openGraph: {
    title: "Resume | Younes Khoubaz",
    description: "Professional resume of Younes Khoubaz",
  },
};

export default async function ResumePage() {
  const language = await getLanguage();
  const t = getTranslations(language);

  return (
    <div className="container max-w-3xl mx-auto">
      <BackLink />
      <h1 className="font-mono text-4xl mb-8">{t.resume.title}</h1>

      {/* PDF Viewer */}
      <div className="opacity-0 animate-slide-up">
        <ResumeViewer initialLanguage={language} translations={t.resume} />
      </div>
    </div>
  );
}
