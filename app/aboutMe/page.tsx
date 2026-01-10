import Header from "@/components/common/Header";
import Image from "next/image";
import { 
    bf ,
    coding,
    travel,
    movie,
    sports,
    basketBall,
    pythonBanner,
    army,
    univ
} from "@/public/assets/images";
import Timeline from "@/components/Timeline";
import CarousselHobbies from "@/components/CarousselHobbies";
import MagazineInspirations from "@/components/MagazineInspirations";
import Footer from "@/components/common/Footer";
import { TimelineItemData } from "@/types/timeline";
import { timelineItemData } from "@/data/aboutMeData";



export default function AboutMe() {

  const array: TimelineItemData[] = timelineItemData

  return (
    <div className="flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header></Header>
      <main className="flex flex-col min-h-screen w-full max-w-8xl items-center justify-between   bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col md:flex-row w-full items-stretch gap-6 text-center sm:text-left p-4 md:p-16">
          
          <div className="w-full max-w-sm flex">
            <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl">
              <Image
                src="/assets/images/bf.jpg"
                alt="Photo de profil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full">

            <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-4">
              About me
            </h1>
            <p className="w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <span className="font-semibold text-white">Développeur Junior</span> de 20 ans, <span className="font-semibold text-white">avide de connaissances</span>.
              <br />
              Toujours <span className="font-semibold text-white">en quête de nouvelles compétences</span> et de <span className="font-semibold text-white">défis à relever</span>, j’aime apprendre en pratiquant et me confronter à des problématiques concrètes.
              <br />
              <span className="font-semibold text-white">Sortir de ma zone de confort</span> est ce qui <span className="font-semibold text-white">me motive</span> dans chaque projet que j’entreprends, car c’est là que je progresse le plus.
              <br />
              <span className="font-semibold text-white">J’aime collaborer, partager</span> et <span className="font-semibold text-white">évoluer avec les autres</span>, en gardant une vision commune et des objectifs clairs.
              <br />
              Curieux de nature, j’aime <span className="font-semibold text-white">comprendre en profondeur chaque technologie</span> ou discipline que j’explore, aussi bien sur les aspects techniques que conceptuels.
              <br />
              Le sport fait partie intégrante de mon quotidien et m’a appris la <span className="font-semibold text-white">rigueur, la persévérance et le dépassement de soi</span>, des valeurs que j’applique aussi dans mon travail.
              <br />
              J’accorde une grande importance aux <span className="font-semibold text-white">relations humaines</span>, que ce soit en équipe ou avec des clients, et j’apprécie les échanges constructifs qui font avancer les projets.
              <br />
              Enfin, j’aime partager des moments avec mes amis et mes collaborateurs, convaincu que <span className="font-semibold text-white">la réussite passe autant par la technique que par l’humain</span>.
            
            </p>
          </div>

        </div>
        <div className="w-full gap-4 text-base font-medium p-4 md:p-16">
          <div className="mb-4 py-8">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 ">Mes Hobbies</h1>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
          </div>
          <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-4 h-[700px]">
            <div 
              className="relative 
                col-span-2 row-span-1 rounded-xl 
                overflow-hidden group shadow-xl 
                border 
                dark:border-white/30  
                dark:bg-white/15"
              >
              {/* Image */}
              <Image
                src="/assets/images/movie.jpg"
                fill
                className="object-cover"
                alt="Cinéma"
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500 ease-out
                  bg-[radial-gradient(ellipse_at_center,transparent_62%,rgba(170,170,170,0.10)_78%,rgba(150,150,150,0.18)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0 h-1/2
                  bg-gradient-to-t from-black/40 via-black/10 to-transparent
                "
              />

              <div
                className="
                  absolute bottom-6 left-6 z-10
                  flex items-center gap-3
                  transition-transform duration-300
                  group-hover:translate-y-[-2px]
                  group-hover:scale-[1.01] transition-transform duration-500

                "
              >
                <span className="w-8 h-px bg-white/70" />

                <span
                  className="
                    text-zinc-100
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
                  "
                >
                  Cinéma
                </span>
              </div>
            </div>

            <div 
              className="relative 
                col-span-1 row-span-2 
                rounded-xl overflow-hidden group 
                shadow-xl 
                border 
                dark:border-white/30  
                dark:bg-white/15"
            >
              <Image src="/assets/images/travel.jpeg" fill className="object-cover" alt="" />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500 ease-out
                  bg-[radial-gradient(ellipse_at_center,transparent_62%,rgba(170,170,170,0.10)_78%,rgba(150,150,150,0.18)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0 h-1/2
                  bg-gradient-to-t from-black/40 via-black/10 to-transparent
                "
              />

              <div
                className="
                  absolute bottom-6 left-6 z-10
                  flex items-center gap-3
                  transition-transform duration-300
                  group-hover:translate-y-[-2px]
                  group-hover:scale-[1.01] transition-transform duration-500

                "
              >
                <span className="w-8 h-px bg-white/70" />

                <span
                  className="
                    text-zinc-100
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
                  "
                >
                  Voyage
                </span>
              </div>
            </div>
            <div 
              className="relative 
                col-span-1 row-span-2 
                rounded-xl overflow-hidden group shadow-xl 
                border 
                dark:border-white/30  
                dark:bg-white/15"
            >
              <Image src="/assets/images/baketball.jpg" fill className="object-cover" alt="" />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500 ease-out
                  bg-[radial-gradient(ellipse_at_center,transparent_62%,rgba(170,170,170,0.10)_78%,rgba(150,150,150,0.18)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0 h-1/2
                  bg-gradient-to-t from-black/40 via-black/10 to-transparent
                "
              />

              <div
                className="
                  absolute bottom-6 left-6 z-10
                  flex items-center gap-3
                  transition-transform duration-300
                  group-hover:translate-y-[-2px]
                  group-hover:scale-[1.01] transition-transform duration-500

                "
              >
                <span className="w-8 h-px bg-white/70" />

                <span
                  className="
                    text-zinc-100
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
                  "
                >
                  Basket-ball
                </span>
              </div>
            </div>
            <div 
              className="
                relative col-span-1
                row-span-1 rounded-xl 
                overflow-hidden group shadow-xl 
                border 
                dark:border-white/30  
                dark:bg-white/15"
            >
              <Image src="/assets/images/sports.jpg" fill className="object-cover" alt="" />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500 ease-out
                  bg-[radial-gradient(ellipse_at_center,transparent_62%,rgba(170,170,170,0.10)_78%,rgba(150,150,150,0.18)_100%)]
                "
              />


              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0 h-1/2
                  bg-gradient-to-t from-black/40 via-black/10 to-transparent
                "
              />

              <div
                className="
                  absolute bottom-6 left-6 z-10
                  flex items-center gap-3
                  transition-transform duration-300
                  group-hover:translate-y-[-2px]
                  group-hover:scale-[1.01] transition-transform duration-500

                "
              >
                <span className="w-8 h-px bg-white/70" />

                <span
                  className="
                    text-zinc-100
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
                  "
                >
                  Musculation
                </span>
              </div>
            </div>
            <div 
              className="relative 
                col-span-2 row-span-1 rounded-xl 
                overflow-hidden group shadow-xl 
                border 
                dark:border-white/30  
                dark:bg-white/15"
            >
              {/* Image */}
              <Image
                src="/assets/images/coding.jpg"
                fill
                className="object-cover"
                alt="Développement"
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500 ease-out
                  bg-[radial-gradient(ellipse_at_center,transparent_62%,rgba(170,170,170,0.10)_78%,rgba(150,150,150,0.18)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 bottom-0 h-1/2
                  bg-gradient-to-t from-black/40 via-black/10 to-transparent
                "
              />

              <div
                className="
                  absolute bottom-6 left-6 z-10
                  flex items-center gap-3
                  transition-transform duration-300
                  group-hover:translate-y-[-2px]
                  group-hover:scale-[1.01] transition-transform duration-500

                "
              >
                <span className="w-8 h-px bg-white/70" />

                <span
                  className="
                    text-zinc-100
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
                  "
                >
                  Développement
                </span>
              </div>

            </div>
          </div>
            <CarousselHobbies></CarousselHobbies>
        </div>
        <div className="w-full gap-4 text-base font-medium p-4 md:p-16">
          <div className="mb-4 py-8">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 ">Mon parcours</h1>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
          </div>
          <Timeline
            items = {array}
          >
            
          </Timeline>
        </div>
        
        <div className="w-full gap-4 text-base font-medium p-4 md:p-16">
          <div className="mb-4 py-8">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 ">Mes Inspirations</h1>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
          </div>
          <MagazineInspirations></MagazineInspirations>

        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
