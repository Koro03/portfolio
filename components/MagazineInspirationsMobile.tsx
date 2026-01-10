"use client"

import Image from "next/image";
import { inspirations } from "@/types/inpirations";

export default function MagazineInspirationsMobile({ inspirations }: { inspirations: inspirations[] }) {

    return (
    <div className="flex flex-col gap-16">
      {inspirations.map((item, index) => (
        <article key={index} className="bg-white rounded-xl p-8 border border-zinc-200 hover:border-zinc-400 transition-colors">

            <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-serif text-gray-400">
                {index + 1}
                </span>
                <h2 className="text-3xl font-serif font-semibold text-gray-400">
                {item.title}
                </h2>
            </div>

            <div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
                <Image
                src={item.image.src}
                alt={item.image.alt ?? item.title}
                fill
                className="object-cover"
                />
            </div>

            <p className="text-zinc-700 leading-relaxed max-w-prose">
                {item.text}
            </p>
        </article>

      ))}
    </div>
  )
}
