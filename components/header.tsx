"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedLogo } from "./animated-logo";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "@/lib/language-provider";
import { getTranslations } from "@/lib/i18n";
import { HeaderIcon, NavIcon } from "./navbar-icons";

const socialLinks = [
  { name: "github", href: "https://github.com/VirtuMind", label: "GitHub" },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/khoubaz",
    label: "LinkedIn",
  },
  { name: "twitter", href: "https://x.com/VirtuoMind", label: "X (Twitter)" },
];

export function Header() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = getTranslations(language);

  const navLinks = [
    { href: "/", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/resume", label: t.nav.resume },
    { href: "/history", label: t.nav.history },
  ];

  return (
    <>
      <header>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <AnimatedLogo />
            </Link>

            <div className="flex items-center gap-3 md:gap-6">
              {/* Navigation links */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      "px-3 py-2 cursor-pointer relative group transition-colors hover:text-accent"
                    }
                  >
                    {link.label}
                    <span
                      className={
                        "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all w-0 group-hover:w-3/4"
                      }
                    />
                  </Link>
                ))}
              </nav>

              {/* Social Links */}
              <div className="flex items-center gap-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="p-2 cursor-pointer transition-colors hover:text-accent"
                  >
                    <HeaderIcon name={social.name} />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 glass rounded-2xl shadow-lg">
        <div className="flex items-center justify-around h-16 px-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`p-3 cursor-pointer transition-colors rounded-xl ${
                pathname === link.href
                  ? "text-accent bg-accent/10"
                  : "hover:text-accent"
              }`}
              aria-label={link.label}
            >
              <NavIcon href={link.href} />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
