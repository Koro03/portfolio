import Header from "@/components/common/Header";
import Image from "next/image";
import { presentationProject, projects } from "@/data/project";
import { PresentationProject } from "@/types/project";
import Footer from "@/components/common/Footer";
import { image } from "motion/react-client";


export const dynamic = "error"; 

export async function generateStaticParams() {
  return [
    { slug: "transparent-bg" },
    { slug: "subCut" },
    { slug: "wiki-app" },
    { slug: "reseaux-et-web" },
    { slug: "sudoku" },
    { slug: "loarwenn" },
  ];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project:PresentationProject | undefined = presentationProject.find((p) => p.slug === slug);  

  return (
    <div className="flex-col min-h-screen items-center justify-center font-sans  bg-black">
      <Header></Header>
      <main className="flex flex-col min-h-screen w-full max-w-8xl items-center justify-between  bg-black p-4 md:p-16">
        
        { !project && <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                    Aucun projet
                  </h1>
        }

        { project &&
          <div>
            <section className="w-full  mx-auto pt-16 pb-10 px-4 md:px-16">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                {project.title}
              </h1>

              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                {project.summary}
              </p>
            </section>



            <section className="w-full px-4 md:px-16">
              <div
                className="
                  relative w-full
                  aspect-[16/9]
                  rounded-2xl
                  overflow-hidden
                  bg-white/5
                  border border-white/10
                  shadow-xl
                "
              >
                <Image
                  src={project.mainImage.src}
                  alt={project.mainImage.alt ?? project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </section>
            <section className="w-full mx-auto py-14 px-4 md:px-16">
              <p className="text-base md:text-lg leading-relaxed text-white/75">
                {project.description}
              </p>
            </section>

            <div className="mt-6 h-px w-24 bg-gradient-to-r from-white/40 to-transparent" />



            <section className="px-6 md:px-16 py-16">
              <h2 className="text-2xl font-semibold mb-6 text-white">Stack & Technologies</h2>

              <ul className="flex flex-wrap gap-3">
                {project.technos.map((tech) => (
                  <li
                    key={tech.name}
                    className="
                      px-4 py-2 rounded-full
                      bg-white/10
                      border border-white/20
                      backdrop-blur-md
                      text-sm text-white/80
                    "
                  >
                    <div className="flex items-center space-x-2">
                            <Image 
                            src={tech.image.src}
                            alt={tech.image.alt ?? tech.name}
                            width={32}
                            height={32}
                            priority
                            />
                            <p>{tech.name}</p>
                        </div>
                    
                  </li>
                ))}
              </ul>
            </section>
          

          <section className="px-6 md:px-16 py-16 bg-white/5">
            <h2 className="text-2xl font-semibold mb-10 text-white">Fonctionnalités clés</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    p-6 rounded-xl
                    bg-white/10
                    border border-white/20
                    backdrop-blur-md
                  "
                >
                  <p className="text-white/90">{feature}</p>
                </div>
              ))}
            </div>
        </section>

          <section className="px-6 md:px-16 py-20">
            <h2 className="text-2xl font-semibold mb-10 text-white">
              Apprentissages & Challenges
            </h2>

            <div className="grid md:grid-cols-2 gap-12">

              <div>
                <h3 className="text-lg font-medium mb-4 text-white">
                  Ce que j’ai appris
                </h3>
                <ul className="space-y-3 text-white/70">
                  {
                    project.learnings.map((learned,index)=>{

                      return <li key={index}>{learned}</li>
                    })
                  }
                  
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 text-white">
                  Ce qui m’a challengé
                </h3>
                <ul className="space-y-3 text-white/70">
                    {
                    project.challenges.map((challenge,index)=>{

                      return <li key={index}>{challenge}</li>
                    })
                  }
                </ul>
              </div>

            </div>
          </section>
        
        </div>
        }

      </main>

      <Footer></Footer>
    </div>

  );
}

