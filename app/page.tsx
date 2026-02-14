import Image from "next/image";

import BioSection from "@/components/Home/BioSection";
import ToggleWorkSection from "@/components/Home/ToggleTextWorkSection";
import Header from "@/components/common/Header";
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
import ToggleText from "@/components/Home/ToggleText";
import Footer from "@/components/common/Footer";
import CaroussselHomeBento from "@/components/Home/CarousselHomeBento";
import HomeMobile from "@/components/Home/HomeMobile";
import HeroCTA from "@/components/Home/HeroCTA";
import InfiniteSlider from "@/components/Home/InfiniteSlider";
import AuroraGradient from "@/components/common/AuroraGradient";

export default function Home() {

    return (
        <>
        
            <Header></Header>   
            <div className="relative min-h-screen font-sans bg-black overflow-hidden">
                <div className="pointer-events-none absolute inset-0 z-5">
                    <div
                        className="
                        absolute
                        top-[2%] right-[2%]
                        w-[420px] h-[420px]
                        bg-[#2EE6A6]/20
                        rounded-full
                        blur-[160px]
                        "
                        />

                    <div
                        className="
                        absolute
                        top-[0] left-[0]
                        w-[420px] h-[420px]
                        bg-[#2EE6A6]/20
                    rounded-full
                    blur-[160px]
                    "
                    />

                    <div
                        className="
                    absolute
                    top-[35%] left-[2%]
                    w-[150px] h-[150px]
                    bg-[#2EE6A6]/20
                    rounded-full
                    blur-[70px]
                    "
                    />

                    <div
                        className="
                    absolute
                    bottom-[10%] right-[5%]
                    w-[150px] h-[150px]
                    bg-[#2EE6A6]/20
                    rounded-full
                    blur-[70px]
                    "
                    />
                </div>
                


                <HeroCTA></HeroCTA>
                <main className="relative flex w-full max-w-8xl flex-col items-center justify-between p-4 md:px-16 overflow-hidden">

                    <div className="parent rounded-xl hidden ">
                        <div className="group div1 relative rounded-xl
                        py-4 px-4
                        h-full min-h-80
                        overflow-hidden

                        bg-white/10
                        backdrop-blur-md
                        border border-white/10
                        shadow-lg shadow-black/10

                        hidden md:block

                        hover:bg-white/30
                        transition-all duration-300
                        "
                        >
                            {/* IMAGE */}
                            <Image
                                src={bf}
                                alt="Photo Benjamin Fauchet"
                                fill
                                className="object-cover object-[center_30%] md:object-center "
                                priority
                            />
                            <div
                                className="
                            pointer-events-none
                            absolute inset-0
                            bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]
                            "
                            />


                        </div>

                        <div className="div2 rounded-xl p-4 hidden md:block rounded-xl 
                        py-4 px-4 
                        h-full 
                        overflow-hidden
                        
                        bg-white/10
                        backdrop-blur-md
                        border border-white/15
                        shadow-lg shadow-black/10

                        inset-shadow
                        hidden md:block

                        transition-all duration-300">
                            <BioSection></BioSection>
                        </div>

                        <div className="div3 rounded-xl flex hidden md:block 
                        py-4 px-4 
                        h-full 
                        overflow-hidden
                        
                        bg-white/10
                        backdrop-blur-md
                        border border-white/15
                        shadow-lg shadow-black/10

                        hidden md:block
                        content-center

                        transition-all duration-300">
                            <div className="w-full flex flex-wrap  justify-between items-center">
                                
                                <AuroraGradient></AuroraGradient>
                                
                                <a href="mailto:benjamin.fauchet@yahoo.com" className="hover:-translate-y-1 transition-all duration-300 z-100">
                                    <Image
                                        src={mail}
                                        alt="Mail to benjamin.fauchet@yahoo.com"
                                        width={48}
                                        height={48}
                                        priority>
                                    </Image></a>
                                <a href="https:/www.linkedin.com/in/benjamin-fauchet-02a81b299" target="_blank" className="hover:-translate-y-1 transition-all duration-300 z-100" >
                                    <Image
                                        src={linkedin}
                                        alt="Linkedin Benjamin Fauchet"
                                        width={48}
                                        height={48}
                                        priority>
                                    </Image>
                                </a>
                                <a href="https://github.com/Koro03" className="hover:-translate-y-1 transition-all duration-300 z-100" target="_blank">
                                    <Image
                                        src={github}
                                        alt="Github Benjamin Fauchet | Koro03"
                                        width={48}
                                        height={48}
                                        priority>
                                    </Image>
                                </a>

                            </div>
                        </div>

                        <ToggleWorkSection className="
                        div6 
                        rounded-xl 
                        py-4 px-4 
                        h-full 
                        overflow-hidden
                        
                        bg-white/10
                        backdrop-blur-md
                        border border-white/15
                        shadow-lg shadow-black/10

                        inset-shadow
                        hidden md:block

                        transition-all duration-300
                        
                        "

                            title="MA MANIERE DE TRAVAILLER"
                            initialText={
                                <>
                                    <span className="font-semibold text-white">Mon travail</span> repose sur la recherche constante de <span className="font-semibold text-white">clarté</span> et d’<span className="font-semibold text-white">efficacité</span>.
                                    <br /><br />
                                    J’aime <span className="font-semibold text-white">expérimenter</span>, tester différentes approches et remettre en question les évidences pour trouver les <span className="font-semibold text-white">solutions les plus pertinentes</span>.
                                    <br /><br />
                                    Chaque ligne de code doit <span className="font-semibold text-white">répondre à un besoin concret</span> et apporter une vraie valeur, aussi bien pour l’utilisateur que pour le produit.
                                </>
                            }

                            expandableText={
                                <>
                                    Je cherche à construire des expériences <span className="font-semibold text-white">lisibles, performantes et durables</span>, où la technique sert le sens et non l’inverse.
                                    <br /><br />
                                    J’accorde une grande importance aux <span className="font-semibold text-white">détails</span>, à la cohérence globale et à la qualité du rendu final, qu’il s’agisse d’interface, d’architecture ou de performance.
                                    <br /><br />
                                    Mon objectif est simple : <span className="font-semibold text-white">allier rigueur, créativité et impact</span> pour concevoir des projets solides, utiles et agréables à utiliser.
                                </>
                            }

                        ></ToggleWorkSection>
                        <div className="div5 hidden md:block">
                            <CaroussselHomeBento></CaroussselHomeBento>
                        </div>
                        <ToggleWorkSection
                            className="div7 rounded-xl 
                        py-4 px-4 
                        h-full 
                        overflow-hidden
                        
                        bg-white/10
                        backdrop-blur-md
                        border border-white/15
                        shadow-lg shadow-black/10

                        hidden md:block
                        
                        inset-shadow
                        
                        transition-all duration-300
                        "

                            title="MON PROJETS DU MOMENT"
                            initialText={
                                <>
                                    <span className="font-semibold text-white">Simplifier le montage vidéo</span> en automatisant la création de sous-titres grâce à <span className="font-semibold text-white">l’IA vocale et Python</span>.
                                    <br /><br />
                                    Ce projet m’a plongé dans l’univers du <span className="font-semibold text-white">traitement multimédia</span>, de l’<span className="font-semibold text-white">analyse audio</span> et des pipelines automatisés — un <span className="font-semibold text-white">défi technique exigeant</span> que j’ai pris beaucoup de plaisir à relever.
                                </>
                            }

                            expandableText={
                                <>
                                    L’objectif n’était pas seulement de générer des sous-titres, mais de concevoir un <span className="font-semibold text-white">outil fiable, rapide et exploitable en production</span>.
                                    <br /><br />
                                    J’ai travaillé sur la <span className="font-semibold text-white">qualité de la transcription</span>, la synchronisation précise avec la vidéo et l’optimisation des performances, tout en gardant une approche <span className="font-semibold text-white">pragmatique et orientée usage réel</span>.
                                    <br /><br />
                                    Ce projet reflète ma manière d’aborder un problème : comprendre le besoin, expérimenter, itérer, puis transformer une idée en <span className="font-semibold text-white">solution concrète et utile</span>.
                                </>
                            }

                        ></ToggleWorkSection>

                        <div className="div4 rounded-xl py-2 hidden md:block  
                        h-full 
                        overflow-hidden
                        
                        bg-white/10
                        backdrop-blur-md
                        border border-white/15
                        shadow-lg shadow-black/10

                        hidden md:block
                        content-center
                        transition-all duration-300">
                            <AuroraGradient></AuroraGradient>
                            <InfiniteSlider left={true}></InfiniteSlider>
                            <InfiniteSlider left={false}></InfiniteSlider>

                        </div>

                    </div>

                    <div className="md:hidden w-full">
                        <HomeMobile></HomeMobile>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        </>

        
    );
}
