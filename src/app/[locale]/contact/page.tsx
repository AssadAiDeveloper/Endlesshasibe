"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contactPage");

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border">
                  <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-charcoal">{t("addressLabel")}</h3>
                    <p className="text-sm text-muted">Europaplein 49, 1969 KE Heemskerk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border">
                  <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-charcoal">{t("phoneLabel")}</h3>
                    <a href="tel:0251201202" className="text-sm text-muted hover:text-primary transition-colors">
                      0251 201 202
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border">
                  <Mail size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-charcoal">{t("emailLabel")}</h3>
                    <a href="mailto:info@endlesshairhasibe.nl" className="text-sm text-muted hover:text-primary transition-colors">
                      info@endlesshairhasibe.nl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border">
                  <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-charcoal">{t("hoursLabel")}</h3>
                    <p className="text-sm text-muted">Ma: 12:00-17:00 · Di-Za: 09:00-17:00 · Zo: Gesloten</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <form className="space-y-5 p-8 bg-white rounded-2xl border border-border shadow-sm">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    {t("formName")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      {t("formEmail")}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      {t("formPhone")}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    {t("formMessage")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  {t("formSubmit")}
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Europaplein+49+Heemskerk&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Endless Hair by Hasibe - Google Maps"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
