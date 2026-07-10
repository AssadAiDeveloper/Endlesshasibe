"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";

export default function ExtensionsPage() {
  const t = useTranslations("extensions");

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
              <Sparkles size={24} className="text-primary" />
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
          >
            <p className="text-muted text-lg leading-relaxed">{t("text")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {["100% echt haar", "Naadloze integratie", "Alle lengtes & kleuren", "Professioneel advies"].map(
              (feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border"
                >
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-charcoal font-medium">{feature}</span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
