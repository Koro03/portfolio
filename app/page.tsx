import Image from "next/image";

import BioSection from "@/components/BioSection";
import ToggleWorkSection from "@/components/ToggleTextWorkSection";
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
    bf ,
    linkedin,apple
} from "@/public/assets/images";
import ToggleText from "@/components/ToggleText";
import Footer from "@/components/common/Footer";
import CaroussselHomeBento from "@/components/CarousselHomeBento";
import HomeMobile from "@/components/HomeMobile";
import HeroCTA from "@/components/HeroCTA";

export default function Home() {

  return (
        
    <div className="flex-col min-h-screen items-center justify-center font-sans dark:bg-black ">
        
        <Header></Header>

        <HeroCTA></HeroCTA>
      <main className=" flex w-full max-w-8xl flex-col items-center justify-between p-4 md:px-16 ">
       
       
        <div className="parent rounded-xl h-screen ">
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

            <div className="div2 rounded-xl p-4 hidden md:block">
                <BioSection></BioSection>
            </div>

            <div className="div3 rounded-xl flex hidden md:block">
                <div className="w-full flex flex-wrap gap-2 justify-between items-center">
                    <a href="mailto:benjamin.fauchet@yahoo.com" className="m-2 ">
                        <Image 
                            src={mail}
                            alt="Mail to benjamin.fauchet@yahoo.com"
                            width={32}
                            height={32}
                            priority>
                        </Image></a>
                    <a href="https:/www.linkedin.com/in/benjamin-fauchet-02a81b299" className="m-2 ">
                        <Image 
                            src={linkedin}
                            alt="Linkedin Benjamin Fauchet"
                            width={32}
                            height={32}
                            priority>
                        </Image>
                    </a>
                    <a href="https://github.com/Koro03" className="m-2 ">
                        <Image 
                            src={github}
                            alt="Github Benjamin Fauchet | Koro03"
                            width={32}
                            height={32}
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
                border border-white/20
                shadow-lg shadow-black/10

                inset-shadow
                hidden md:block

                transition-all duration-300
                
                "

                title="MA MANIERE DE TRAVAILLER"
                initialText={
                    <><span className="font-semibold text-white">Mon travail</span> repose sur la recherche de <span className="font-semibold text-white">clarté</span> et <span className="font-semibold text-white">d’efficacité. </span>
                        <span className="font-semibold text-white">Expérimenter</span> pour trouver les <span className="font-semibold text-white">solutions</span> les plus <span className="font-semibold text-white">pertinentes.</span>  
                    </>
                }
                expandableText={
                    <>Chaque ligne de code doit <span className="font-semibold text-white">répondre à un besoin concret</span> et apporter une vraie valeur.  
                        Mon objectif : <span className="font-semibold text-white">allier rigueur, créativité</span> et impact dans chaque projet.
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
                border border-white/20
                shadow-lg shadow-black/10

                hidden md:block
                
                inset-shadow
                
                transition-all duration-300
                "

                title="MON PROJETS DU MOMENT"
                initialText={
                    <>
                        <span className="font-semibold text-white">Simplifier le montage vidéo</span> en automatisant la création de sous-titres grâce à <span className="font-semibold text-white">l’IA vocal et Python.</span>
                    </>
                }
                expandableText={
                    <>
                        Ce projet m’a plongé dans l’univers du <span className="font-semibold text-white">traitement multimédia et de l’IA vocale</span> — un vrai défi passionant relever !
                    </>
                }
            ></ToggleWorkSection>

            <div className="div4 rounded-xl py-2 hidden md:block">
                <div className="w-full inline-flex flex-nowrap py-2 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={react}
                            alt="React logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>React</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={tailwind}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>Tailwind</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={php}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>php</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={js}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>JavaScript</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={ts}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>TypeScript</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={c}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>C</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={cSharp}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>c#</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={symfony}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>symfony</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={figma}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>figma</p>
                        </li>
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={react}
                            alt="React logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>React</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={tailwind}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>Tailwind</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={php}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>php</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={js}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>JavaScript</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={ts}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>TypeScript</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={c}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>C</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={cSharp}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>c#</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={symfony}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>symfony</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={figma}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>figma</p>
                        </li>
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={react}
                            alt="React logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>React</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={tailwind}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>Tailwind</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={php}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>php</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={js}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>JavaScript</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={ts}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>TypeScript</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={c}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>C</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={cSharp}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>c#</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={symfony}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>symfony</p>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Image 
                            src={figma}
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                            />
                            <p>figma</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="div8 rounded-xl flex-col justify-center hidden md:block overflow-hidden">
                <h3 className="text-lg text-slate-50 ml-4 mt-4 font-semibold leading-8 truncate">MES INSPIRATIONS</h3>
                <div id="seconde-grid" className="parent-2 p-4 h-full overflow-hidden">
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
            </div>
            
        </div>

        <div className="md:hidden w-full">
            <HomeMobile></HomeMobile>

        </div>



      </main>
      <Footer></Footer>
    </div>
  );
}
