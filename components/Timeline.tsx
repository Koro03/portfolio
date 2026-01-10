"use client"

import { ReactNode, useEffect, useState } from "react";
import TimelineItem from "./TimelineItem";
import { AnimatePresence } from "motion/react";
import ImmersiveFocusView from "./ImmersiveFocusView";
import { StaticImageData } from "next/image";
import { TimelineProps } from "@/types/timeline";

export default function Timeline({ items = [] }: TimelineProps) {

    //immersive view soit faire une vue pour chaque Item soit donner les children de l'item
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const update = () => setIsDesktop(window.innerWidth >= 768); 
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);


    return (
        <div className="relative flex flex-col gap-10">
            {/* Ligne */}
            <div className="absolute left-4 top-0 h-full w-px bg-white/20 hidden md:block" />
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    index={index}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    isDesktop={isDesktop}
                    children={item}
                    

                />
            ))}


            <AnimatePresence>
                {activeIndex !== null &&  (
                <div className="hidden md:block">

                    <ImmersiveFocusView
                        children={items[activeIndex]}
                        index={activeIndex}
                        total={items.length}
                        isDesktop={isDesktop}
                        onClose={() => setActiveIndex(null)}
                        onNext={() =>
                            setActiveIndex(i => Math.min(i! + 1, items.length - 1))
                        }
                        onPrev={() =>
                            setActiveIndex(i => Math.max(i! - 1, 0))
                        }
                        onSetIndex={setActiveIndex}
                    >
                        
                    </ImmersiveFocusView>
                </div>
                )}
            </AnimatePresence>
        </div>
    )
}