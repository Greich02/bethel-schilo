"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecte le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "Fonctionnalités", href: "#features" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-b from-amber-50 to-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
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
              <p className={`font-semibold ${isScrolled ? "text-amber-900" : "text-amber-700"}`}>Bethel-Schilo TPC</p>
            </div>
          </motion.div>

          {/* Menu Desktop */}
          <motion.div
            className="hidden md:flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`${isScrolled ? "text-slate-700" : "text-slate-600"} hover:text-amber-700 transition-colors font-medium cursor-pointer`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Bouton Menu Mobile */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-amber-900" : "text-amber-900"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-amber-900" : "text-amber-900"}`} />
            )}
          </motion.button>
        </div>

        {/* Menu Mobile */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? "bg-white shadow-lg" : "bg-transparent"}`}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 py-4 px-4 border-t border-amber-200">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-amber-900 hover:text-amber-700 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-amber-50 cursor-pointer block"
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
