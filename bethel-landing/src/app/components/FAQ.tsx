"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Comment puis-je télécharger Bethel-Schilo?",
      answer:
        "Bethel-Schilo est disponible sur l'App Store (iOS) et Google Play (Android). Recherchez simplement 'Bethel-Schilo TPC' et téléchargez l'application officielle. C'est complètement gratuit!",
    },
    {
      question: "Y a-t-il des frais pour utiliser l'application?",
      answer:
        "Non, Bethel-Schilo est entièrement gratuit. Tous les enseignements, événements et fonctionnalités sont accessibles sans frais d'abonnement. C'est notre façon de servir notre communauté.",
    },
    {
      question: "Puis-je suivre les services en direct si je ne suis pas à l'église?",
      answer:
        "Oui, c'est l'une de nos principales fonctionnalités! Vous pouvez regarder les services en direct, les études bibliques et les événements en temps réel via l'application, où que vous soyez.",
    },
    {
      question: "Comment rejoindre ma communauté locale?",
      answer:
        "Après vous être inscrit et connecté, vous pouvez chercher votre église locale dans la section 'Communautés' ou saisir un code d'invitation fourni par votre pasteur ou un membre de votre église.",
    },
    {
      question: "Est-ce que mes données personnelles sont protégées?",
      answer:
        "Absolument. Nous utilisons les meilleures pratiques de sécurité et de chiffrement pour protéger vos informations personnelles. Votre vie privée est une priorité absolue pour nous.",
    },
    {
      question: "Comment demander des prières pour une situation personnelle?",
      answer:
        "Vous pouvez poster une demande de prière dans votre groupe communautaire ou utiliser la fonctionnalité dédiée 'Demande de prière' pour que toute la communauté prie avec vous.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
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
              Questions Fréquentes
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Réponses aux questions les plus courantes
          </p>
        </motion.div>

        {/* Accordéon */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full text-left bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-amber-700"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-amber-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-amber-700 flex-shrink-0" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Réponse avec animation */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-amber-50 rounded-b-2xl p-6 pt-2 text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Section d'aide supplémentaire */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-amber-700 to-orange-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2">Besoin d'aide?</h3>
          <p className="mb-4">
            Vous ne trouvez pas la réponse à votre question?
          </p>
          <motion.a
            href="#footer"
            className="inline-block px-6 py-3 bg-white text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-nous
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
