import { getTranslations } from "@/lib/translations";
import { getLanguage } from "@/lib/cookies";
import Link from "next/link";

export default async function Home() {
  const language = await getLanguage();
  const t = getTranslations(language);

  return (
    <div className="container max-w-3xl mx-auto">
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

        <div className="mt-12 space-y-4">
          <p>
            {t.about.findMe}{" "}
            <Link
              href="https://x.com/VirtuoMind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold underline decoration-1.5 underline-offset-4 hover:decoration-primary/80 decoration-primary/50 transition-all cursor-pointer"
            >
              @VirtuoMind
            </Link>
          </p>

          <p>
            {t.about.email}{" "}
            <Link
              href="mailto:younes.khoubaz@gmail.com"
              className="text-accent font-semibold underline decoration-1.5 underline-offset-4 hover:decoration-primary/80 decoration-primary/50 transition-all cursor-pointer"
            >
              younes.khoubaz@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
