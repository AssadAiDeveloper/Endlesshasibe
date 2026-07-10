"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, Scissors } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  return (
    <>
      <section className="pt-32 pb-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Scissors size={24} className="text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-white/60">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted leading-relaxed text-lg">{t("text")}</p>
            <p className="text-muted leading-relaxed text-lg mt-6">{t("text2")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border border-border">
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-charcoal">{i === 0 ? "15+" : i === 1 ? "5000+" : i === 2 ? "100%" : "5.0"}</p>
                <p className="text-sm text-muted mt-1">
                  {i === 0 ? "Years Experience" : i === 1 ? "Happy Clients" : i === 2 ? "Satisfaction" : "Rating"}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
