"use client";

import { motion } from "motion/react";

export default function HeroCTA() {
  return (
    <section className="relative md:h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden h-[calc(100vh-4rem)]">


      {/* glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        className="
          absolute
          w-[600px] h-[600px]
          bg-white/10
          rounded-full
          blur-[120px]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative z-10
          max-w-4xl
          px-10 py-16
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          text-center m-4
        "
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-7xl font-semibold tracking-tight"
        >
          FAUCHET Benjamin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-white/70"
        >
          Développeur orienté qualité, performance et expérience utilisateur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-white md:text-white/80 text-lg md:text-lg leading-8"
        >
          <a
            href="mailto:prenom.nom@email.com"
            className="hover:text-white transition"
          >
            benjamin.fauchet@yahoo.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
