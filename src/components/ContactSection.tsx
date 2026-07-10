"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contact");

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="p-8 rounded-2xl bg-cream border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <MapPin size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-charcoal mb-2">{t("addressLabel")}</h3>
            <p className="text-muted text-sm leading-relaxed">{t("address")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-cream border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Phone size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-charcoal mb-2">{t("phoneLabel")}</h3>
            <a
              href="tel:0251201202"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              {t("phone")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-cream border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Mail size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-charcoal mb-2">{t("emailLabel")}</h3>
            <a
              href="mailto:info@endlesshairhasibe.nl"
              className="text-muted text-sm hover:text-primary transition-colors"
            >
              {t("email")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-cream border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Clock size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-charcoal mb-2">{t("hoursTitle")}</h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li className="flex justify-between">
                <span className="text-charcoal/60 font-medium">Ma</span>
                <span>{t("hours.mon")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-charcoal/60 font-medium">Di</span>
                <span>{t("hours.tue")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-charcoal/60 font-medium">Wo</span>
                <span>{t("hours.wed")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-charcoal/60 font-medium">Do</span>
                <span>{t("hours.thu")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-charcoal/60 font-medium">Vr</span>
                <span>{t("hours.fri")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-charcoal/60 font-medium">Za</span>
                <span>{t("hours.sat")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-charcoal/60 font-medium">Zo</span>
                <span>{t("hours.sun")}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
