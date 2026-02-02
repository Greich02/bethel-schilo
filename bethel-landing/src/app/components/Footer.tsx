"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer id="footer" className="bg-slate-900 text-white">
      {/* Contenu principal du footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Grille du contenu */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* À propos */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/bethel-logo.png"
                    alt="Bethel-Schilo Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <p className="font-bold">Bethel-Schilo</p>
                  <p className="text-xs text-amber-300">TPC</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                L'application officielle pour explorer des vidéos, audios,
                prédications et intercessions. Grandir dans la foi avec
                Bethel-Schilo.
              </p>
            </motion.div>

            {/* Liens rapides */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
              <ul className="space-y-3">
                {[
                  { label: "Accueil", href: "#home" },
                  { label: "Fonctionnalités", href: "#features" },
                  { label: "Galerie", href: "#gallery" },
                ].map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-400 text-sm">
                    <p className="font-semibold mb-1">MTN</p>
                    <a href="tel:+22901961332150" className="hover:text-amber-400">
                      +229 0196133215
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-400 text-sm">
                    <p className="font-semibold mb-1">Moov</p>
                    <a href="tel:+22901945809010" className="hover:text-amber-400">
                      +229 0194580901
                    </a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Ligne de séparation */}
          <motion.div
            className="border-t border-slate-800 py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Bas du footer */}
          <motion.div
            className="border-t border-slate-800 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-500 text-sm">
              © {currentYear} Bethel-Schilo TPC. Tous droits réservés.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bouton de retour au haut */}
      <motion.button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-700 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all z-40"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: false }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7-7m0 0L5 14m7-7v12"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
