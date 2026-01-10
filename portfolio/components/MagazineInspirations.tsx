"use client"

import Image from "next/image";
import { 
    bc2 ,
    coding,
    travel,
    movie,
    sports,
    basketBall,
    pythonBanner,
    army,
    univ,gk,bf,btp

} from "@/public/assets/images";
import { ReactNode, useState } from "react";
import { AnimatePresence,motion } from "motion/react";
import MagazinePage from "./MagazinePage";
import MagazineInspirationsMobile from "./MagazineInspirationsMobile";
import { img } from "@/types/project";
import { inspirations } from "@/types/inpirations";
import { inspirationsPersonality } from "@/data/inspirations";




export default function MagazineInspirations() {

    const inspirations:inspirations[] = inspirationsPersonality

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState<number | null>(null)
    const [direction, setDirection] = useState<1 | -1>(1)
    const [isAnimating, setIsAnimating] = useState(false)

    const goNext = () => {
        if (isAnimating || currentIndex + 1 >= inspirations.length) return

        setIsAnimating(true)
        setDirection(1)
        setNextIndex(currentIndex + 1)
    }

     const goPrev = () => {
        if (isAnimating || currentIndex -1 <0) return

        setIsAnimating(true)
        setDirection(-1)
        setNextIndex(currentIndex - 1)
    }

    return (
        <>
            <div className="block md:hidden">
                <MagazineInspirationsMobile inspirations={inspirations} />
            </div>

            <div className="relative w-full h-[80vh] overflow-hidden bg-white hidden md:block">

        
            {nextIndex !== null && (
                <MagazinePage
                inspiration={inspirations[nextIndex]}
                index={nextIndex}
                total={inspirations.length}
                z="z-0"
                />
            )}

            
            <MagazinePage
                index={currentIndex}
                inspiration={inspirations[currentIndex]}
                total={inspirations.length}
                z="z-10"
                onNext={goNext}
                onPrev={goPrev}
            />

            
            <motion.div
                className="absolute inset-0 bg-black z-20"
                initial={{ scaleX: 0 }}
                animate={isAnimating ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{ originX: direction === 1 ? 1 : 0 }}
                onAnimationComplete={() => {
                if (nextIndex !== null) {
                    setCurrentIndex(nextIndex)
                    setNextIndex(null)
                    setIsAnimating(false)
                }
                }}
            />

            </div>
    
        </>
    
    
    
        

)
  
}