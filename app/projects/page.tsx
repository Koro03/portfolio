import Header from "@/components/common/Header";
import Image from "next/image";
import { 

  bf ,

} from "@/public/assets/images";
import CardProject from "@/components/CardProject";
import CarousselSchoolProjetcs from "@/components/CarousselSchoolProjetcs";
import Footer from "@/components/common/Footer";
import { cardProjects, projects } from "@/data/project";
import { CardProjectInfo } from "@/types/project";


export default function Project() {

  const personalProject:CardProjectInfo[] = cardProjects

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header></Header>
      <main className="flex flex-col min-h-screen w-full max-w-8xl flex-col items-center justify-between   bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col md:flex-row w-full items-stretch gap-6 text-center p-4 sm:text-left md:p-16"> 
          <div className="w-full max-w-sm flex">
            <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl">
              <Image
                src={bf}
                alt="Photo de profil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full">

          
            <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-4">
              Ma manière de travailler
            </h1>
            
            <p className="w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <span className="font-semibold text-white">Mon travail</span> repose sur la recherche de <span className="font-semibold text-white">clarté</span> et <span className="font-semibold text-white">d’efficacité. </span>
              <span className="font-semibold text-white">Expérimenter</span> pour trouver les <span className="font-semibold text-white">solutions</span> les plus <span className="font-semibold text-white">pertinentes. </span>  

              Chaque ligne de code doit <span className="font-semibold text-white"> répondre à un besoin concret</span> et apporter une vraie valeur.  
              Mon objectif : <span className="font-semibold text-white"> allier rigueur, créativité</span> et impact dans chaque projet.
              Je m’attache à concevoir des interfaces  
              <span className="font-semibold text-white"> simples, lisibles et intuitives</span>, 
              pensées avant tout pour l’utilisateur.  
              J’accorde une grande importance à la 
              <span className="font-semibold text-white"> qualité du code</span> et à sa maintenabilité dans le temps.  
              Le travail en équipe est pour moi une source de 
              <span className="font-semibold text-white"> progression continue</span> et d’apprentissage.  
              J’aime analyser, tester et améliorer afin de faire évoluer chaque solution.  
              Mon ambition est de construire des projets 
              <span className="font-semibold text-white"> utiles, solides et durables</span>.
              
            </p>
          </div>

        </div>
        <div className="flex flex-col w-full gap-4 text-base font-medium  dark:bg-[var(--ligther-background)] dark:bg-black p-4 md:p-16">
          <div className="mb-4 py-8">
            <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 ">Mes projets personelles</h1>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
          </div>

          <section className="
            grid 
            grid-cols-1 
            gap-8 
            md:grid-cols-2
            md:px-8
            md:mx-8
          ">

  
            {/* Colonne gauche */}
            <div className="flex flex-col gap-8">
              <div className="
                rounded-xl 
                p-6 
                
              ">
                <h2 className="text-2xl font-semibold mb-4">
                  À propos
                </h2>
                <p className="text-base leading-relaxed">
                  La réalisation de projets m’a permis d’explorer librement des technologies et des idées qui m’intéressaient. 
                  Ils ont renforcé mon autonomie, ma curiosité et ma capacité à apprendre par moi-même. J’y ai développé le goût de l’expérimentation et de l’amélioration continue. 
                  Ces projets reflètent ma motivation et mon envie constante de progresser en dehors du cadre académique.
                </p>
              </div>
              {personalProject
                .filter(project => !project.rigth && project.type == "personnal")
                .map((project, index) => (
                  <CardProject key={index} project={project} />
              ))}
            </div>

            {/* Colonne droite */}
            <div className="flex flex-col gap-8">
              {personalProject
                .filter(project => project.rigth && project.type == "personnal")
                .map((project, index) => (
                  <CardProject key={index} project={project} />
              ))}

            </div>

          </section>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium  p-4 md:p-16">
          <div className="mb-4 py-8">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 py-8">Mes projets d'études</h1>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />
          </div>
          <CarousselSchoolProjetcs></CarousselSchoolProjetcs>
        </div>
        
      </main>
      <Footer></Footer>
    </div>
  );
}
