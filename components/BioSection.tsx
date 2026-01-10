"use client";

import { useState } from "react";
import ToggleText from "./ToggleText";
import ProgressBar from "./ProgressBar";

export default function BioSection() {
  const [showExpanded, setShowExpanded] = useState(false);

  return (
    <div className="h-full flex flex-col">
        <ToggleText 
            initialText={
                < >
                <span className="font-semibold text-white">Développeur Junior</span> de 20 ans, <span className="font-semibold text-white">avide de connaissances.</span>
                <br />
                Toujours <span className="font-semibold text-white">en quête de nouvelles compétences</span> et <span className="font-semibold text-white">de défis à réaliser.</span>
                </>
            }
            expandableText={
                <>
                <span className="font-semibold text-white">Sortir de ma zone de confort</span> est ce qui <span className="font-semibold text-white">me motive</span> dans chaque projet que j’entreprends.
                <br />
                <span className="font-semibold text-white">J’aime collaborer, partager</span> et <span className="font-semibold text-white">évoluer avec les autres.</span>
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
