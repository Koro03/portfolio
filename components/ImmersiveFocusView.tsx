"use client"

import { ReactNode, useEffect } from "react"
import Image from "next/image"
import { motion } from "motion/react";
import { TimelineItemData } from "@/types/timeline";



type Props = {
  children: TimelineItemData;
  index: number;
  total: number;
  isDesktop:boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSetIndex: (i: number) => void;

};

export default function ImmersiveFocusView({
  index,
  children,
  total,
  isDesktop,
  onClose,
  onNext,
  onPrev,
  onSetIndex
}: Props) {
    useEffect(() => {
      if (!isDesktop) return; 
      document.body.style.overflow = "hidden";
      return () => {
          document.body.style.overflow = "";
      };
    }, [isDesktop])
    return(
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
            {/* Image backdrop */}
            {children.image && <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={children.image.src}
                fill
                className="object-cover blur-xl scale-150 opacity-50"
                alt=""
                priority
              />
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>}

            {/* Wrapper centré */}
            <div className="relative flex items-stretch gap-20 z-10 translate-y-[-5vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Timeline */}
              <aside className="relative w-16 flex justify-center pt-8">
                {/* Ligne */}
                <div className="absolute left-1/2 top-8 h-full w-px bg-white/20 -translate-x-1/2" />
                {/* Points */}
                <div className="relative flex flex-col  gap-20">
                  
                  {Array.from({ length: total }).map((_, i) => (
                    <button
                      key={i}
                      className={`w-3 h-3 rounded-full transition ${i === index ? "bg-white" : "bg-white/40 hover:bg-white"}`}
                      onClick={() => onSetIndex(i)} 
                    />
                  ))}
                </div>
              </aside>
              {/* Article */}
              <motion.div
                className="
                  relative
                  z-10
                  max-w-3xl
                  w-full
                  max-h-[80vh]
                  overflow-y-auto
                  rounded-2xl
                  p-8
                  bg-white/10
                  backdrop-blur-xl
                  text-white
                  scrollbar-custom
                "
              >

                <h2 className="text-3xl font-semibold">
                  {children.title}
                </h2>

                {children.image && <div className="relative mt-6 w-full min-h-[200px]   overflow-hidden rounded-xl">
                  <Image
                    src={children.image?.src}
                    alt={children.image?.alt ?? children.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>}

                <p className="mt-3 opacity-70">
                  {children.period}
                </p>

                <div className="mt-6 leading-relaxed">
                  {children.summary}
                  <br />
                  {children.details}

                </div>

              </motion.div>
              {/*<div className="flex justify-between mt-8">
                <button onClick={onPrev}>←</button>
                <button onClick={onNext}>→</button>
              </div>*/}
            </div>
          
          </motion.div>
    )

}