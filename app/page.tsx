"use client";
import { BackLink } from "@/components/back-link";
import { Header } from "@/components/header";
import { getTranslations } from "@/lib/i18n";
import { useLanguage } from "@/lib/language-provider";

export default function Home() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <main className="container mx-auto px-4 pt-18">
      <div className="max-w-3xl mx-auto">
        {/* <BackLink /> */}

        <h1 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-balance">
          Younes Khoubaz
        </h1>

        <div className="text-lg mt-12 opacity-0 animate-slide-up">
          <div className="space-y-4 leading-relaxed">
            <p>{t.about.greeting}</p>

            <p>{t.about.paragraph1}</p>

            <p>{t.about.paragraph2}</p>
          </div>

          <div className="mt-12 mb-30 md:mb-0 space-y-4 opacity-0 animate-slide-up">
            <p>
              {t.about.findMe}{" "}
              <a
                href="https://x.com/VirtuoMind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium transition-colors cursor-pointer"
              >
                @VirtuoMind
              </a>
            </p>

            <p>
              {t.about.email}{" "}
              <a
                href="mailto:younes.khoubaz@gmail.com"
                className="text-accent hover:underline font-medium transition-colors cursor-pointer"
              >
                younes.khoubaz@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
