"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Scissors, Palette, Shirt, Heart, Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";

const icons = [
  <Scissors key="cut" size={28} />,
  <Palette key="color" size={28} />,
  <Shirt key="ext" size={28} />,
  <Heart key="bridal" size={28} />,
  <Sparkles key="treatment" size={28} />,
];

const links = [
  "/prices",
  "/prices",
  "/extensions",
  "/",
  "/prices",
];

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    { key: "cut" as const },
    { key: "color" as const },
    { key: "extensions" as const },
    { key: "bridal" as const },
    { key: "treatment" as const },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("sectionTitle")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            {t("sectionTitle")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={links[i]}
                className="group block p-8 rounded-2xl bg-cream border border-border hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white transition-colors mb-5 shadow-sm">
                  {icons[i]}
                </div>
                <h3 className="text-lg font-semibold text-charcoal group-hover:text-white transition-colors mb-2">
                  {t(`${service.key}`)}
                </h3>
                <p className="text-sm text-muted group-hover:text-white/70 transition-colors leading-relaxed">
                  {t(`${service.key}Desc`)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
