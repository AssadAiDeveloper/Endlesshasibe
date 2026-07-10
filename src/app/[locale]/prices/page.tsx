"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Droplets, Zap, Eye, Sun, Wind } from "lucide-react";

const icons = [<Scissors size={20} />, <Droplets size={20} />, <Scissors size={20} />, <Scissors size={20} />, <Sparkles size={20} />, <Sparkles size={20} />, <Sparkles size={20} />, <Wind size={20} />, <Zap size={20} />, <Sparkles size={20} />, <Sparkles size={20} />, <Zap size={20} />, <Eye size={20} />, <Eye size={20} />, <Sun size={20} />, <Sparkles size={20} />];

const priceItems = [
  { name: "Wassen & drogen", price: "€20,00" },
  { name: "Dames knippen", price: "€30,00" },
  { name: "Kinderen tot 12 jaar", price: "€20,00" },
  { name: "Föhnen", price: "Vanaf €35,00" },
  { name: "Krullen", price: "Vanaf €50,00" },
  { name: "Uitgroei verven", price: "Vanaf €45,00" },
  { name: "Hele haar verven", price: "Vanaf €70,00" },
  { name: "Highlights (per folie)", price: "€3,00" },
  { name: "Permanenten deel", price: "Vanaf €60,00" },
  { name: "Permanenten hele haar", price: "Vanaf €75,00" },
  { name: "Braziliaans keratine behandeling", price: "Vanaf €120,00" },
  { name: "Wenkbrauwen/wimpers verven", price: "€15,00" },
  { name: "Wenkbrauwen epileren", price: "€15,00" },
  { name: "Gezicht epileren", price: "€17,50" },
  { name: "Schoonheidsbehandelingen", price: "Vanaf €55,00" },
];

export default function PricesPage() {
  const t = useTranslations("pricesWomen");

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
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    {icons[i % icons.length]}
                  </div>
                  <span className="text-sm font-medium text-charcoal">{item.name}</span>
                </div>
                <span className="text-base font-semibold text-primary whitespace-nowrap ml-4">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
