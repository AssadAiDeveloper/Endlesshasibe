"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

// الصور من مجلد public/image
const heroImages = [
  "/image/6.jpeg",
  "/image/7.jpeg",
  "/image/8.jpeg",
  "/image/9.jpeg",
  "/image/10.jpeg",
  "/image/11.jpeg",
  "/image/13.jpeg",
];

const preloaded = new Set<string>();

function preloadImage(src: string) {
  if (preloaded.has(src)) return;
  preloaded.add(src);
  const img = new window.Image();
  img.src = src;
}

export default function HeroSection() {
  const t = useTranslations("hero");
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % heroImages.length;
        preloadImage(heroImages[(next + 1) % heroImages.length]);
        return next;
      });
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    preloadImage(heroImages[0]);
    preloadImage(heroImages[1]);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-800 ease-in-out ${
              i === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={i === activeIndex ? { backgroundImage: `url(${img})` } : {}}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10" />
      <div className="absolute inset-0 z-10 flex items-end justify-center pb-8 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-primary w-6" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
          >
            <Scissors size={28} className="text-primary" />
          </motion.div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            {t("title")}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-4 font-light"
          >
            {t("subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm text-primary/80 mb-10 tracking-widest uppercase font-medium"
          >
            {t("excellence")}
          </motion.p>
          
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
