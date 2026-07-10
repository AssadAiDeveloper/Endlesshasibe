import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === "ar";
  const logoText = isRtl ? "إندليس هير باي هاسيبي" : "Endless Hair by Hasibe";

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt={logoText} width={200} height={65} className="brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("about.body")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              {t("nav.contact")}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href="tel:0251201202" className="hover:text-white transition-colors">
                  {t("contact.phone")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary" />
                <a href="mailto:info@endlesshairhasibe.nl" className="hover:text-white transition-colors">
                  {t("contact.email")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              {t("contact.hoursTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between">
                <span>{t("contact.hours.mon")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contact.hours.tue")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contact.hours.wed")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contact.hours.thu")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contact.hours.fri")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contact.hours.sat")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} {logoText}. {t("footer.rights")}.</p>
        </div>
      </div>
    </footer>
  );
}
