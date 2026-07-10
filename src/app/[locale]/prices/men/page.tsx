"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Scissors, Sparkles } from "lucide-react";

const priceItems = [
  { name: "Heren knippen", price: "€25,00", icon: <Scissors size={20} /> },
  { name: "Wassen & knippen", price: "€35,00", icon: <Scissors size={20} /> },
  { name: "Knippen & baard", price: "€38,00", icon: <Scissors size={20} /> },
  { name: "Baard trimmen", price: "€15,00", icon: <Scissors size={20} /> },
  { name: "Kleuren", price: "Vanaf €55,00", icon: <Sparkles size={20} /> },
];

export default function PricesMenPage() {
  const t = useTranslations("pricesMen");

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-white/60">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {priceItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-charcoal">{item.name}</span>
                </div>
                <span className="text-base font-semibold text-primary">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
