"use client"

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence,motion } from "motion/react";

type HobbyImage = {
    title:string
    src: string
    alt?: string
}

type HobbySlide = {
  images: HobbyImage[] // toujours un tableau
}


export default function CarousselHobbies() {

    const slides: HobbySlide[] = [
        {
            images: [
            { title:"Cinéma", src: "/assets/images/movie.jpg", alt: "Movie" },
            { title:"Développement",src: "/assets/images/coding.jpg", alt: "Coding" },
            ],
        },
        {
            images: [
            { title:"Basket-ball",src: "/assets/images/basketBall.jpg", alt: "Basketball" },
            ],
        },
        {
            images: [
            { title:"Voyage",src: "/assets/images/travel.jpeg", alt: "Travel" },
            { title:"Musculation",src: "/assets/images/sports.jpg", alt: "Sports" },
            ],
        },
        ]



    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState<1 | -1>(1)

    return (

        
        <div className="md:hidden overflow-hidden my-4">
                <div className="flex flex-col gap-5">
                    <motion.div
                        className="flex gap-4"
                        animate={{
                            x: `calc(-${index} * (80% + 1rem))`,

                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                    
                        {slides.map((slide, i) => (
                            <motion.div
                                key={i}
                                className={`min-w-[80%] flex gap-4 ${
                                slide.images.length > 1 ? "flex-col" : "flex"
                                }`}
                                animate={{
                                    scale: direction === 1 && i === index - 1 ? 0.3 : 1,
                                    opacity: direction === 1 && i === index - 1 ? 0 : 1,
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {slide.images.map((img, j) => (
                                <div
                                    key={j}
                                    className={`relative w-full ${
                                    slide.images.length > 1 ? "h-[250px]" : "h-full"
                                    } rounded-xl overflow-hidden group`}
                                >
                                    <Image
                                    src={img.src}
                                    alt={img.alt ?? ""}
                                    fill
                                    className="object-cover"
                                    />

                                    <div
                                        className="
                                        pointer-events-none
                                        absolute inset-0
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-opacity duration-500 ease-out
                                        bg-[radial-gradient(ellipse_at_center,transparent_62%,rgba(170,170,170,0.10)_78%,rgba(150,150,150,0.18)_100%)]
                                        "
                                    />

                                    <div
                                        className="
                                        pointer-events-none
                                        absolute inset-0
                                        bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]
                                        "
                                    />

                                    <div
                                        className="
                                        pointer-events-none
                                        absolute inset-x-0 bottom-0 h-1/2
                                        bg-gradient-to-t from-black/40 via-black/10 to-transparent
                                        "
                                    />

                                    <div
                                        className="
                                        absolute bottom-6 left-6 z-10
                                        flex items-center gap-3
                                        transition-transform duration-300
                                        group-hover:translate-y-[-2px]
                                        group-hover:scale-[1.01] transition-transform duration-500

                                        "
                                    >
                                        <span className="w-8 h-px bg-white/70" />

                                        <span
                                        className="
                                            text-zinc-100
                                            text-sm
                                            uppercase
                                            tracking-[0.25em]
                                            font-semibold
                                            drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
                                        "
                                        >
                                        {img.title}
                                        </span>
                                    </div>
                                </div>
                                ))}
                            </motion.div>
                            ))}


                    </motion.div>
                    <div className="flex m-4 justify-center gap-16">
                        <button className="bg-white rounded-3xl p-4" 
                            disabled={index <= 0} 
                            onClick={() => { 
                                setDirection(-1) 
                                setIndex((i) => Math.max(i - 1, 0)) 
                            }} 
                        >
                            <Image
                                src="/assets/images/left-arrow-svgrepo-com.svg"
                                alt="Project"
                                width={24}
                                height={24}
                                className="object-cover rounded-xl"
                            />
                        </button>
                            <button className="bg-white rounded-3xl p-4" 
                                disabled={index >= slides.length - 1} 
                                onClick={() => { 
                                    setDirection(1) 
                                    setIndex((i) => Math.min(i + 1, slides.length - 1)) 
                                }} 
                            ><Image
                                src="/assets/images/right-arrow-svgrepo-com.svg"
                                width={24}
                                height={24}
                                alt="Project"
                                
                                className="object-cover rounded-xl"
                        /></button> 
                    </div>
                </div>
            </div>

    )
}