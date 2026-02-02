"use client";

import { useState } from "react";
import ToggleText from "./ToggleText";
import ProgressBar from "./ProgressBar";

export default function BioSection() {
    const [showExpanded, setShowExpanded] = useState(false);

    return (
        <div className="h-full flex flex-col ">
            <ToggleText
                initialText={
                    <>
                        <span className="font-semibold text-white">Développeur junior</span> de 20 ans, animé par une <span className="font-semibold text-white">curiosité constante</span> et une réelle envie de progresser.
                        <br /><br />
                        Toujours <span className="font-semibold text-white">en quête de nouvelles compétences</span> et de <span className="font-semibold text-white">défis à relever</span>, je cherche à sortir de ma zone de confort pour apprendre, expérimenter et évoluer à travers chaque projet.
                    </>
                }

                expandableText={
                    <>
                        Ce qui me motive avant tout, c’est la possibilité de <span className="font-semibold text-white">progresser continuellement</span>, aussi bien sur le plan technique que personnel.
                        <br /><br />
                        J’accorde une grande importance à la <span className="font-semibold text-white">collaboration</span>, au partage de connaissances et aux échanges, convaincu que l’on avance toujours plus loin en apprenant des autres.
                        <br /><br />
                        Mon objectif est simple : <span className="font-semibold text-white">construire des bases solides</span>, développer une vraie rigueur, et m’investir pleinement dans des projets qui ont du sens.
                    </>
                }

                className="overflow-hidden mb-6"
                classNameText1="text-lg text-[#999999] pb-4"
                classNameText2="text-lg text-[#999999] pb-4"
                isExpanded={showExpanded}
                onToggle={() => setShowExpanded(prev => !prev)}
            ></ToggleText>

            <div className="mt-auto w-full">

                <ProgressBar
                    duration={7000}
                    loop
                    onLoop={() => setShowExpanded(prev => !prev)}
                />
            </div>
        </div>
    );
}
