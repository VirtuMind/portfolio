import { BackLink } from "@/components/back-link";
import { getTranslations } from "@/lib/translations";
import { getLanguage } from "@/lib/cookies";

const NotFound = async () => {
  const language = await getLanguage();
  const t = getTranslations(language);
  return (
    <div className="container max-w-3xl mx-auto">
      <h1 className="font-mono md:text-4xl text-2xl">{t.notFound.title}</h1>
      <p className="mt-4 text-lg mb-6">{t.notFound.message}</p>
      <BackLink />
    </div>
  );
};

export default NotFound;
