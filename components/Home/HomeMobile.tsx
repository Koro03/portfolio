import Image from "next/image"

import {
    react,
    tailwind,
    bc,
    btp,
    gk,
    github,
    mail,
    js,
    c,
    figma,
    cSharp,
    php,
    symfony,
    ts,
    bf,
    linkedin, apple
} from "@/public/assets/images";
import CaroussselHomeBento from "./CarousselHomeBento";
import InfiniteSlider from "./InfiniteSlider";

export default function HomeMobile() {

    const hobbies: string[] = ["Cinéma", "Développement", "Basket-ball", "Voyage", "Musculation"]

    return (
        <div className="w-full">
            
            <article className="py-4">
                <div className="relative min-h-[420px] rounded-2xl overflow-hidden">
                    <Image
                    src={bf}
                    alt="Photo Benjamin Fauchet"
                    fill
                    className="object-cover object-[center_30%]"
                    priority
                    />

<div
  className="
    pointer-events-none
    absolute inset-0
    bg-black/25
    backdrop-blur-[4px]
    [mask-image:linear-gradient(to_top,black_0%,black_40%,transparent_75%)]
  "
/>





                    <div className="
                    absolute bottom-4 left-4 right-4
                    rounded-xl p-4
                    bg-white/10 backdrop-blur-md
                    border border-white/20
                    ">
                    <p className="text-white text-sm leading-relaxed">
                        <span className="font-semibold">Développeur junior</span> de 20 ans, animé par la curiosité.
                        <br />
                        Toujours en quête de <span className="font-semibold">nouveaux défis</span> et de progression.
                        <br />
                        Sortir de ma zone de confort guide chacun de mes projets.
                    </p>
                    </div>
                </div>
            </article>


            <article className="py-4">
                <div className="mb-4">
                    <h1 className="md:hidden max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black  text-zinc-50 pt-4">Mon travail</h1>
                    <div className="mt-4 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
                </div>
                <section className="my-8">
                    <h3 className="text-xl font-medium mb-4 text-white"> Ma manière de travailler</h3>
                    <div className="px-2">

                        <p className="text-white/60"><span className=" text-white">Mon travail</span> repose sur la recherche de <span className="  text-white">clarté</span> et <span className="  text-white">d’efficacité. </span><br />
                            <span className=" text-white">Expérimenter</span> pour trouver les <span className="  text-white">solutions</span> les plus <span className="  text-white">pertinentes.</span> <br />
                        </p>
                        <br />
                        <p className="text-white/60">Chaque ligne de code doit <span className=" text-white">répondre à un besoin concret</span> et apporter une vraie valeur. <br />
                            Mon objectif : <span className="  text-white">allier rigueur, créativité</span> et impact dans chaque projet. <br />
                        </p>
                    </div>
                </section>

                <section className="py-4">
                    <h3 className="text-xl font-medium mb-4 text-white"> Mes différents projets</h3>
                    <CaroussselHomeBento></CaroussselHomeBento>
                </section>

                <section className="my-8">
                    <h3 className="text-xl font-medium mb-4 text-white"> Mon projet du moment</h3>
                    <div className="px-2">

                        <p className="text-white/60">
                            <span className="  text-white">Simplifier le montage vidéo</span> en automatisant la création de sous-titres grâce à <span className="  text-white">l’IA vocal et Python.</span><br />
                        </p>
                        <br />
                        <p className="text-white/60">
                            Ce projet m’a plongé dans l’univers du <span className="  text-white">traitement multimédia et de l’IA vocale</span> — un vrai défi passionant relever ! <br />
                        </p>
                    </div>

                </section>

            </article>


            <InfiniteSlider left></InfiniteSlider>

            <article className="w-full py-4">
                <div className="mb-4">
                    <h1 className="md:hidden max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black  text-zinc-50 pt-4">à propos de moi</h1>
                    <div className="mt-4 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
                </div>

                <div className="py-4">

                    <h3 className="text-xl font-medium mb-4 text-white">
                        Mes inspirations
                    </h3>
                    <section className="div8 rounded-xl flex-col justify-center">

                        <div id="seconde-grid" className="parent-2 p-4 min-h-80">
                            <div className="div1-2 rounded-xl relative overflow-hidden
                                    
                                bg-white
                                backdrop-blur-md
                                border border-white/20
                                shadow-lg shadow-black/10
        
                                transition-all duration-300
                                "
                            >
                                <Image
                                    src={apple}
                                    alt="apple logo"
                                    fill
                                    className="object-contain "
                                    priority
                                >
                                </Image>

                            </div>
                            <div className="div2-2 rounded-xl relative overflow-hidden
                                    
                                    bg-white/10
                                    backdrop-blur-md
                                    border border-white/20
                                    shadow-lg shadow-black/10
            
                                    transition-all duration-300
                                    hover:bg-white/20"
                            >
                                <Image
                                    src={bc}
                                    alt="benjamin code"
                                    fill
                                    className="object-cover"
                                    priority
                                >
                                </Image>

                            </div>
                            <div className="div3-2 rounded-xl relative overflow-hidden
                                    
                                            bg-white/10
                                            backdrop-blur-md
                                            border border-white/20
                                            shadow-lg shadow-black/10
                    
                                            transition-all duration-300
                                            hover:bg-white/20"
                            >
                                <Image
                                    src={gk}
                                    alt="grafikart"
                                    fill
                                    className="object-cover"
                                    priority
                                >
                                </Image>

                            </div>
                            <div className="div4-2 rounded-xl relative overflow-hidden
                                    
                                            bg-white/10
                                            backdrop-blur-md
                                            border border-white/20
                                            shadow-lg shadow-black/10
                    
                                            transition-all duration-300
                                            hover:bg-white/20"
                            >
                                <Image
                                    src={btp}
                                    alt="backthornprod"
                                    fill
                                    className="object-cover"
                                    priority
                                >
                                </Image>

                            </div>


                        </div>
                    </section>
                </div>

                <section className="p-4">

                    <h3 className="text-xl font-medium mb-4 text-white">
                        Mes Hobbies
                    </h3>
                    <ul className="space-y-3 text-white/70">
                        {
                            hobbies.map((learned, index) => {
                                return <li key={index}>{learned}</li>
                            })
                        }

                    </ul>
                </section>
            </article>

        </div>
    )

}