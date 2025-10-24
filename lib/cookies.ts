"use server";
import { cookies } from "next/headers";
import type { Language } from "./translations";

const LANGUAGE_COOKIE_NAME = "preferred-language";

export async function getLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  const language = cookieStore.get(LANGUAGE_COOKIE_NAME)?.value as Language;
  return language || "en";
}

export async function setLanguageCookie(language: Language): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(LANGUAGE_COOKIE_NAME, language, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  });
}
