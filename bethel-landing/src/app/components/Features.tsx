"use client";

import { motion } from "framer-motion";
import {
  Video,
  Radio,
  Radio as Live,
  MessageCircle,
  Mic,
  Heart,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Video,
      title: "Vidéos",
      description:
        "Accédez à une vaste bibliothèque de vidéos inspirantes et éducatives pour votre croissance spirituelle",
      color: "from-amber-700 to-orange-600",
    },
    {
      icon: Radio,
      title: "Audios",
      description:
        "Écoutez des prédications, méditations et enseignements bibliques en audio où que vous soyez",
      color: "from-orange-600 to-red-500",
    },
    {
      icon: Live,
      title: "Diffusions en Direct",
      description:
        "Participez aux services, études bibliques et événements communautaires en temps réel",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: MessageCircle,
      title: "Annonces",
      description:
        "Restez informé des actualités, événements et mises à jour importantes de votre communauté",
      color: "from-amber-900 to-amber-700",
    },
    {
      icon: Mic,
      title: "Prédications",
      description:
        "Explorez une collection riche de prédications puissantes pour approfondir votre foi",
      color: "from-orange-400 to-amber-700",
    },
    {
      icon: Heart,
      title: "Intercessions",
      description:
        "Retrouvez des guides d'intercession pour prier ensemble et soutenir votre communauté spirituelle",
      color: "from-amber-700 to-orange-500",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50"
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
              Fonctionnalités Puissantes
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour grandir spirituellement en
            communauté
          </p>
        </motion.div>

        {/* Grille de cartes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                {/* Carte */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-amber-100">
                  {/* Gradient background hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Icône */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>

                    {/* Texte */}
                    <h3 className="text-xl font-bold text-amber-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bordure active */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
