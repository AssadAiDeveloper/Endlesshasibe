"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "pricesMen", href: "/prices/men" },
  { key: "pricesWomen", href: "/prices" },
  { key: "brands", href: "/brands" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isRtl = locale === "ar";
  const logoText = isRtl ? "إندليس هير باي هاسيبي" : "Endless Hair by Hasibe";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-border transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt={logoText}
              width={180}
              height={60}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-accent text-foreground"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: isRtl ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className={`fixed top-0 ${isRtl ? "right-0" : "left-0"} bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50`}
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Image src="/logo.png" alt={logoText} width={150} height={50} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="p-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                ))}
              
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
