"use client";

import { motion, Variants } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-20 flex items-center relative overflow-hidden"
    >
      {/* Éléments de décoration */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-red-300 to-orange-300 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contenu texte */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-amber-900 via-orange-600 to-red-500 bg-clip-text text-transparent">
              Téléchargez
            </span>
            <br />
            <span className="text-amber-700">Bethel-Schilo</span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 leading-relaxed max-w-md"
            variants={itemVariants}
          >
            L'application officielle de Bethel-Schilo TPC. Accédez à des vidéos,
            audios, prédications, intercessions, annonces et participez aux
            services en direct. Grandissez spirituellement avec une communauté
            de foi engagée.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="/bethel-schilo-tpc.apk"
              download="bethel-schilo-tpc.apk"
              className="px-8 py-4 bg-gradient-to-r from-amber-700 to-orange-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Télécharger
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image/Illustration */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-md">
            <Image
              src="/screen.jpg"
              alt="Bethel-Schilo App"
              width={400}
              height={800}
              className="w-full h-auto rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}