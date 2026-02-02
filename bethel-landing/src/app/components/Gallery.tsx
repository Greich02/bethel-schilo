"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Données des screenshots
  const screenshots = [
    {
      id: 1,
      title: "Accueil",
      description: "Interface intuitive et accueillante",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      id: 2,
      title: "Enseignements",
      description: "Bibliothèque riche de contenus bibliques",
      gradient: "from-orange-400 to-red-500",
    },
    {
      id: 3,
      title: "Événements",
      description: "Suivez tous les événements communautaires",
      gradient: "from-red-400 to-orange-500",
    },
    {
      id: 4,
      title: "Communauté",
      description: "Connectez-vous avec vos frères et sœurs",
      gradient: "from-amber-700 to-orange-600",
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-900 to-orange-600 bg-clip-text text-transparent">
              Galerie
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez l'interface élégante et intuitive de Bethel-Schilo
          </p>
        </motion.div>

        {/* Grille de screenshots */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {screenshots.map((screenshot) => (
            <motion.div
              key={screenshot.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(screenshot)}
            >
              {/* Téléphone mockup */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Écran du téléphone */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} flex flex-col items-center justify-center p-6 text-white`}
                >
                  {/* Contenu simulé */}
                  <motion.div
                    className="w-12 h-12 bg-white/30 rounded-full mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-white/80 text-center">
                    {screenshot.description}
                  </p>
                  <div className="mt-8 w-full space-y-3">
                    <motion.div
                      className="h-2 bg-white/40 rounded-full"
                      animate={{ width: ["60%", "100%", "60%"] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                    <div className="h-2 bg-white/40 rounded-full w-4/5" />
                    <div className="h-2 bg-white/40 rounded-full w-3/4" />
                  </div>
                </div>

                {/* Overlay au hover */}
                <motion.div
                  className="absolute inset-0 bg-black/30 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-white text-center"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <p className="font-semibold">Cliquer pour agrandir</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de galerie */}
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedImage ? 1 : 0 }}
          onClick={() => setSelectedImage(null)}
          pointer-events={selectedImage ? "auto" : "none"}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: selectedImage ? 1 : 0.8,
              opacity: selectedImage ? 1 : 0,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage && (
              <>
                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {selectedImage.description}
                </p>
                <div
                  className={`aspect-[9/16] bg-gradient-to-br ${selectedImage.gradient} rounded-xl mb-4`}
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full py-2 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors"
                >
                  Fermer
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
