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

      {/* mint glow background */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.5 }}
  transition={{ duration: 1.5 }}
  className="
    absolute
    -top-40 -left-40
    w-[500px] h-[500px]
    bg-[#2EE6A6]/10
    rounded-full
    blur-[160px]
  "
/>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.4 }}
  transition={{ duration: 1.5, delay: 0.2 }}
  className="
    absolute
    bottom-[-200px] right-[-200px]
    w-[600px] h-[600px]
    bg-[#2EE6A6]/5
    rounded-full
    blur-[200px]
  "
/>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          
  relative z-10
  max-w-4xl
  px-10 py-16
  rounded-2xl
  bg-white/5
  backdrop-blur-xl
  border border-white/10
  shadow-[0_0_80px_-20px_rgba(46,230,166,0.15)]
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
  href="mailto:benjamin.fauchet@yahoo.com"
  className="
    relative
    text-[#2EE6A6]
    hover:text-white
    transition
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[1px]
    after:w-0
    after:bg-[#2EE6A6]
    hover:after:w-full
    after:transition-all
    after:duration-300
  "
>
  benjamin.fauchet@yahoo.com
</a>

        </motion.div>
      </motion.div>
    </section>
  );
}
