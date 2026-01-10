import Image from "next/image"

import CaroussselHomeBento from "./CarousselHomeBento";

export default function HomeMobile() {

    const hobbies: string[] = ["Cinéma", "Développement", "Basket-ball", "Voyage", "Musculation"]

    return (
        <div className="w-full">
            <article className="py-4">


                <div className="
                relative rounded-xl
                py-4 px-4
                h-full min-h-80
                overflow-hidden

                bg-white/10
                backdrop-blur-md
                border border-white/10
                shadow-lg shadow-black/10

                hover:bg-white/30
                transition-all duration-300
                "
                >
                    {/* IMAGE */}
                    <Image
                        src="/assets/images/Fauchet_Benjamin.jpg"
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
                <div className="-mx-4 md:mx-0  py-4">

                    <div className="bg-white/2 p-4">
                        <div
                            className="
                        p-4 rounded-xl
                        bg-white/10
                        border border-white/20
                        backdrop-blur-md
                        my-4
                    "
                        >
                            <p>
                                <span className="  text-white">Développeur Junior</span> de 20 ans, <span className="  text-white">avide de connaissances.</span><br />
                            </p>
                        </div>
                        <div
                            className="
                        p-4 rounded-xl
                        bg-white/10
                        border border-white/20
                        backdrop-blur-md
                        my-4
                    "
                        >
                            <p>
                                Toujours <span className="  text-white">en quête de nouvelles compétences</span> et <span className="  text-white">de défis à réaliser.</span><br />

                            </p>
                        </div>
                        <div
                            className="
                        p-4 rounded-xl
                        bg-white/10
                        border border-white/20
                        backdrop-blur-md
                        my-4
                    "
                        >
                            <p>
                                <span className="  text-white">Sortir de ma zone de confort</span> est ce qui <span className="  text-white">me motive</span> dans chaque projet que j’entreprends.<br />
                            </p>
                        </div>
                        <div
                            className="
                        p-4 rounded-xl
                        bg-white/10
                        border border-white/20
                        backdrop-blur-md
                        my-4
                    "
                        >

                            <p>
                                <span className="  text-white">J’aime collaborer, partager</span> et <span className="  text-white">évoluer avec les autres.</span><br />
                            </p>
                        </div>

                    </div>
                </div>


            </article>

            <article className="py-4">
                <div className="mb-4">
                    <h1 className="md:hidden max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pt-4">Mon travail</h1>
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


            <div className="py-4 bg-[var(--darker-background)] w-full inline-flex flex-nowrap py-2 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/react.png"
                            alt="React logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>React</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/Tailwind_CSS_Logo.svg.png"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>Tailwind</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/php-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>php</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/js-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>JavaScript</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/typescript-icon-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>TypeScript</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/c-1.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>C</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/c--4.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>c#</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/symfony-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>symfony</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/figma-svgrepo-com.svg"
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
                            src="/assets/images/react.png"
                            alt="React logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>React</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/Tailwind_CSS_Logo.svg.png"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>Tailwind</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/php-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>php</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/js-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>JavaScript</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/typescript-icon-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>TypeScript</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/c-1.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>C</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/c--4.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>c#</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/symfony-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>symfony</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/figma-svgrepo-com.svg"
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
                            src="/assets/images/react.png"
                            alt="React logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>React</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/Tailwind_CSS_Logo.svg.png"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>Tailwind</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/php-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>php</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/js-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>JavaScript</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/typescript-icon-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>TypeScript</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/c-1.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>C</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/c--4.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>c#</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/symfony-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>symfony</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Image
                            src="/assets/images/figma-svgrepo-com.svg"
                            alt="Tailwind logo"
                            width={32}
                            height={32}
                            priority
                        />
                        <p>figma</p>
                    </li>
                </ul>
            </div>

            <article className="w-full py-4">
                <div className="mb-4">
                    <h1 className="md:hidden max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 pt-4">à propos de moi</h1>
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
                                    src="/assets/images/apple_731985.jpg"
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
                                    src="/assets/images/bc.jpg"
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
                                    src="/assets/images/gk.jpg"
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
                                    src="/assets/images/btp.png"
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
