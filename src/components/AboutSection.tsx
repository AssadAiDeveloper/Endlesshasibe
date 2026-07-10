"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t("sectionTitle")}
            </span>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>{t("body")}</p>
              <p>{t("body2")}</p>
              <p>{t("body3")}</p>
            </div>
            <div className="mt-8 p-6 bg-white rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted">{t("cta")}</p>
                  <a
                    href="tel:0251201202"
                    className="text-xl font-semibold text-charcoal hover:text-primary transition-colors"
                  >
                    {t("phone")}
                  </a>
                  <p className="text-sm text-muted mt-1">{t("or")}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted">
              <Star size={14} className="text-primary fill-primary" />
              <Star size={14} className="text-primary fill-primary" />
              <Star size={14} className="text-primary fill-primary" />
              <Star size={14} className="text-primary fill-primary" />
              <Star size={14} className="text-primary fill-primary" />
              <span className="ml-2">{t("follow")}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden border border-border">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star size={40} className="text-primary" />
                  </div>
                  <p className="text-charcoal/40 italic text-sm">
                    {t("tagline")}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-primary/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
