"use client"

import Image from "next/image";

import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/project";
import { useRouter } from "next/navigation"


export default function CarousselSchoolProjetcs() {
    
    const router = useRouter()
    const schoolProjects = projects.filter((p) => {
        return p.type === "school"
    })



    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState<1 | -1>(1)

    return (

        <div className="flex flex-col md:flex-row gap-5">
            <div className=" md:w-1/2 w-full">
              <p>Les projets d’études ont été essentiels dans mon apprentissage de l’informatique. 
                Ils m’ont permis de confronter la théorie à des problématiques concrètes et de développer une réelle capacité d’analyse. 
                J’ai appris à structurer mon travail, à découper un problème complexe en étapes claires et à trouver des solutions adaptées. 
                Ces projets m’ont aussi aidé à gagner en autonomie tout en comprenant l’importance du travail en équipe et de la communication. 
                Ils m’ont appris à gérer le temps, les imprévus et à améliorer progressivement la qualité de mon code. 
                Enfin, ils ont renforcé ma curiosité et mon envie d’aller toujours plus loin dans la compréhension des technologies utilisées.

              </p>
              <div className="flex m-4 justify-center gap-16">
                <button className="bg-white rounded-3xl p-4" 
                    disabled={index <= 0} 
                    onClick={() => { 
                        setDirection(-1) 
                        setIndex((i) => Math.max(i - 1, 0)) 
                    }} 
                >
                    <Image
                        src="/portfolio/assets/images/left-arrow-svgrepo-com.svg"
                        alt="Project"
                        width={24}
                        height={24}
                        className="object-cover rounded-xl"
                    />
                </button>
                    <button className="bg-white rounded-3xl p-4" 
                        disabled={index >= schoolProjects.length - 1} 
                        onClick={() => { 
                            setDirection(1) 
                            setIndex((i) => Math.min(i + 1, schoolProjects.length - 1)) 
                        }} 
                    ><Image
                        src="/portfolio/assets/images/right-arrow-svgrepo-com.svg"
                        width={24}
                        height={24}
                        alt="Project"
                        
                        className="object-cover rounded-xl"
                    /></button> 
              </div>
            </div>
            <div className="md:w-1/2 w-full overflow-hidden">
                    <div className="flex gap-8 relative">
                        {schoolProjects.map((project, i) => {
                            const isOld = (i === index - 1 || i<index - 1); // carte qui recule

                            return (
                                
                                    <motion.div
                                        key={project.slug}
                                        layout
                                        onClick={() => router.push(`/portfolio/projects/${project.slug}`)}
                                        className={`min-w-[70%] h-125 rounded-xl overflow-hidden  ${
                                        isOld ? "absolute top-0 left-0" : "relative"
                                        }`}
                                        animate={{
                                            scale: isOld ? 0.8 : 1,    
                                            opacity: isOld ? 0 : 1,    
                                            zIndex: isOld ? 0 : 1,
                                        }}
                                        transition={{
                                            type: direction === -1 ? "spring" : "tween",
                                            stiffness: direction === -1 ? 165 : undefined, 
                                            damping: direction === -1 ? 15 : undefined,    
                                            duration: direction === -1 ? undefined : 0.37,
                                        }}
                                    >
                                        <Image
                                        src={project.verticalImage?.src ??project.mainImage.src}
                                        alt="Project"
                                        fill
                                        className="object-cover rounded-xl"
                                        />
                                    </motion.div>

                            );
                        })}
                    </div>


            </div>
        </div>

    )
}