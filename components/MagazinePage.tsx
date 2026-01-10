"use client"

import Image from "next/image";
import { inspirations } from "@/types/inpirations";

export default function MagazinePage({
    index,
    inspiration,
    z,
    total,
    onNext,
    onPrev
}: {
    index: number
    inspiration: inspirations
    z: string
    total: number
    onNext?: () => void
    onPrev?: () => void
}) {
    return (
        <div className={`absolute inset-0 flex ${z}`}>

            {/* IMAGE */}
            <div className="relative w-1/2 h-full">
                <Image
                    src={inspiration.image.src ?? null}
                    alt={inspiration.image.alt ?? inspiration.title}
                    fill
                    className="object-cover"
                />

                {/* COIN PLIÉ */}
                {index - 1 >= 0 && <div className=" absolute bottom-0 left-0 w-20 h-20 cursor-pointer group "
                    onClick={onPrev}
                >
                    {/* shadow */}
                    <div
                        className=" absolute inset-0 bg-zinc-200 shadow-[-4px_-4px_12px_rgba(0,0,0,0.25)] 
                    transition-all duration-300 group-hover:shadow-[-6px_-6px_18px_rgba(0,0,0,0.35)] "
                    />

                    {/* carré blanc */}
                        <div
                            className="absolute inset-0 bg-white border-l border-t border-zinc-300
                 transition-transform duration-300 group-hover:scale-[1.05] flex justify-end items-start overflow-hidden"
                        >
                            {/* triangle pour créer la diagonale */}
                            <div
                                className="w-full h-full absolute top-0 right-0"
                                style={{
                                    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                                    backgroundColor: "rgba(0,0,0,0.05)",
                                }}
                            />
                        </div>

                    {/* Flèche */}
                    <div
                        className=" absolute bottom-3 left-3 z-10 text-zinc-500 text-lg opacity-70 
                    transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 "
                    > ←
                    </div>
                </div>}
            </div>

            {/* PAGE DROITE — TEXTE */}
            <div className="relative w-1/2 h-full flex flex-col justify-between px-16 py-14 bg-white text-black"
            >

                <div>
                    <h1 className=" text-5xl font-serif font-semibold leading-tight tracking-tight mb-6 ">{inspiration.title}</h1>
                    <p className=" text-base leading-relaxed text-zinc-700 max-w-prose ">
                        {inspiration.text}
                    </p>
                </div>

                <p className="text-xs uppercase tracking-widest text-zinc-400">
                    Inspiration · {index < 10 ? "0" + (index + 1) : (index + 1)}
                </p>

                {/* COIN PLIÉ */}
                {index + 1 < total && (
                    <div
                        className="absolute bottom-0 right-0 w-20 h-20 cursor-pointer group"
                        onClick={onNext}
                    >
                        {/* shadow du coin */}
                        <div
                            className="absolute inset-0 bg-zinc-200 shadow-[-4px_-4px_12px_rgba(0,0,0,0.25)]
                 transition-all duration-300 group-hover:shadow-[-6px_-6px_18px_rgba(0,0,0,0.35)]"
                        />

                        {/* carré blanc */}
                        <div
                            className="absolute inset-0 bg-white border-l border-t border-zinc-300
                 transition-transform duration-300 group-hover:scale-[1.05] flex justify-end items-start overflow-hidden"
                        >
                            {/* triangle pour créer la diagonale */}
                            <div
                                className="w-full h-full absolute top-0 right-0"
                                style={{
                                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                                    backgroundColor: "rgba(0,0,0,0.05)",
                                }}
                            />
                        </div>

                        {/* Flèche */}
                        <div
                            className="absolute bottom-3 right-3 z-10 text-zinc-500 text-lg opacity-70
                 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                            →
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
