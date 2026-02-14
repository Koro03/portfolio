"use client"

import { ReactNode, useEffect, useState } from "react";
import ImmersiveFocusView from "./ImmersiveFocusView";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { TimelineItemData } from "@/types/timeline";
import AuroraGradient from "./common/AuroraGradient";

export default function TimelineItem(
  { index, children, isDesktop, activeIndex, setActiveIndex, }: 
  { index: number, children: TimelineItemData, isDesktop: boolean, activeIndex: number | null, setActiveIndex: (i: number | null) => void,
     }
) {

    const expanded = !isDesktop && activeIndex === index;
     
    const handleClick = () => {
        if (isDesktop) {
            setActiveIndex(index); 
        } else {
            setActiveIndex(activeIndex === index ? null : index); 
        }
    }


    return <>
            <div className="relative flex items-start gap-6 group"
                
            >      
                <div
                    className="
                    absolute 
                    left-4 
                    top-6 
                    -translate-x-1/2
                    w-3 h-3 
                    rounded-full 
                    bg-white 
                    z-10
                    hidden md:block
                    "
                />

                <div className="md:pl-8 w-full">
                    
                    <div
                        onClick={handleClick}
                        className="
                            cursor-pointer
                            relative
                            rounded-xl
                            bg-white/10
                            backdrop-blur-md
                            p-4
                            transition-all duration-200
                            h-auto
                            overflow-hidden
                            md:m-4
                            inset-shadow
                            "

                    >
                        <AuroraGradient></AuroraGradient>
                        
                       
                        <div className="flex justify-center my-6">

                            {children.image && 
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative h-56 md:min-h-75 md:h-full rounded-xl overflow-hidden">
                                        <Image
                                        src={children.image.src}
                                        fill
                                        className="object-cover object-left"
                                        alt=""
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{children.title}</h3>
                                        <p className="text-base opacity-70 text-white">{children.period}</p>
                                        
                                        <p 
                                            className={`my-4 mr-8 text-base md:text-lg overflow-hidden text-white ${!isDesktop && !expanded ? "line-clamp-[5]" : ""}`}
                                        >
                                            {children.summary}
                                        </p>

                                        {expanded && children.details}
                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        
        </>;
    
}
