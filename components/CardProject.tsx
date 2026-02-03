import Image from "next/image";
import { 
    clock
} from "@/public/assets/images";
import Link from "next/link";
import { CardProjectInfo } from "@/types/project";


export default function CardProject({project}:{project:CardProjectInfo}) {
    return (



        <div className="
            p-4 
            w-full 
            rounded-xl 
            shadow-xl 
            border 
             border-white/30  
             bg-white/15 "
        >
            <div className="relative w-full h-100 overflow-hidden rounded-xl ">
                <Image 
                    src={project.mainImage.src}
                    alt={project.mainImage.alt ?? project.title}
                    fill
                    className="object-cover"                 
                    priority
                >
                </Image>
            </div>
            <div className=" w-full ">
                <p className="text-xl mt-4 text-white">{project.title}</p>                
                <p className="mt-4 text-white">
                    {project.summary}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                    {project.technos.map((techno,index)=>{

                        return (
                            <div key={index} className="flex items-center space-x-2  bg-[var(--darker-background)] p-2 rounded-xl">
                                <Image 
                                    
                                    src={techno.image.src}
                                    alt="React logo"
                                    width={techno.image.width}
                                    height={techno.image.heigth}
                                    priority
                                />
                                <p className="ml-2 text-white">{techno.name}</p>
                        </div>)
                    })}
                </div>
                <div className="flex mt-4 justify-between">
                    <div className="flex items-center ">
                        <Image 
                                src={clock}
                                alt="time"
                                width={24}
                                height={24}
                                priority
                            />
                            <p className="ml-2 text-white">{project.time}</p>
                    </div>
                    <Link className="
                        inline-flex items-center justify-center
                        px-4 py-2
                        rounded-xl
                        text-sm font-medium
                        backdrop-blur-md
                        bg-white/20
                        text-black
                        border border-white/30
                        shadow-lg
                        transition-all duration-300
                        hover:bg-white/30
                        hover:shadow-xl
                        hover:-translate-y-0.5
                        active:translate-y-0 active:scale-95
                         bg-black
                         text-white
                         border-white/30
                         hover:bg-white/20
                            " 
                        href={`/projects/${project.slug}`}
                    >
                        Voir le projet →
                    </Link>

                </div>
            </div>
        </div>
    )
}