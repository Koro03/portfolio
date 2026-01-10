"use client"

import Image from "next/image"
import { useState } from "react"


export default function CaroussselHomeBento() {
  const slides = [
    { imagePath: "/portfolio/assets/images/apache.png", alt: "Mockup 1" },
    { imagePath: "/portfolio/assets/images/mockup-loarwenn.png", alt: "Mockup 2" },
    { imagePath: "/portfolio/assets/images/mockup-c.png", alt: "Mockup 3" },
  ]

  const [index, setIndex] = useState(0)

  const next = () =>
    setIndex((prev) => (prev + 1) % slides.length)

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-xl
        bg-white/10
        backdrop-blur-md
        border border-white/10
        shadow-lg


        aspect-[16/9]
        md:aspect-auto
        md:h-full
      "
    >
      {/* Images */}
      {slides.map((img, i) => (
        <Image
          key={i}
          src={img.imagePath}
          alt={img.alt}
          fill
          priority={i === index}
          className={`
            absolute inset-0
            object-cover
            transition-all duration-500 ease-in-out
            ${
              i === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }
            hover:scale-[1.03]
          `}
        />
      ))}

      {/* Controls */}
      <button
        onClick={next}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          z-20
          bg-black/40 hover:bg-black/60
          backdrop-blur-md
          rounded-full
          w-10 h-10
          flex items-center justify-center
          transition
        "
      >
        →
      </button>
    </div>
  )
}
