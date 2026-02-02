"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Membres depuis 2 ans",
      content:
        "Bethel-Schilo a transformé ma vie spirituelle. Je peux maintenant suivre les enseignements n'importe où et rester connectée avec ma communauté. C'est vraiment une bénédiction!",
      rating: 5,
      initials: "MD",
    },
    {
      name: "Jean-Pierre Martin",
      role: "Chef de groupe",
      content:
        "L'application facilite vraiment la gestion de notre groupe d'étude biblique. Les notifications en temps réel et la possibilité de partager des ressources ont renforcé notre communauté.",
      rating: 5,
      initials: "JP",
    },
    {
      name: "Sophie Bernard",
      role: "Jeune adulte",
      content:
        "J'adore pouvoir participer aux services en direct même quand je voyage. L'interface est magnifique et très facile à utiliser. Highly recommended!",
      rating: 5,
      initials: "SB",
    },
    {
      name: "Pierre Leclerc",
      role: "Pasteur",
      content:
        "Bethel-Schilo nous permet de mieux servir notre communauté. C'est un outil merveilleux pour l'engagement pastoral et la croissance spirituelle de nos membres.",
      rating: 5,
      initials: "PL",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="testimonials"
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
              Témoignages
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez ce que nos membres disent de Bethel-Schilo
          </p>
        </motion.div>

        {/* Grille de témoignages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-amber-100"
              whileHover={{ y: -5 }}
            >
              {/* Étoiles */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 20 }}
                  >
                    <Star
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                      key={i}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Contenu du témoignage */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Infos de l'auteur */}
              <div className="flex items-center gap-4 pt-6 border-t border-amber-100">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-amber-700 to-orange-600 rounded-full flex items-center justify-center text-white font-bold"
                  whileHover={{ scale: 1.1 }}
                >
                  {testimonial.initials}
                </motion.div>
                <div>
                  <p className="font-bold text-amber-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
