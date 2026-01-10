'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const path = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full">
      
            
            <div
            className="
                absolute
                top-0 left-0 right-0 -bottom-12
                pointer-events-none

                backdrop-blur-[2px]
                bg-white/[0.02]

                [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]
            "
            />



            <div className="relative flex items-center justify-center px-6 md:px-16 py-4">

                <nav className="flex space-x-8 rounded-3xl px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10 transition-all duration-300">
                    <Link
                        href="/"
                        className={` hover:text-white px-2 py-1 rounded-3xl whitespace-nowrap border-2 border-transparent 
                        ${path == "/" ? "text-white" : "text-white/60 hover:text-white"}
                        transition-all duration-300 `}
                    >
                        Accueil
                    </Link>

                    <Link
                        href="/aboutMe"
                        className={`hover:text-white px-2 py-1 rounded-3xl whitespace-nowrap border-2 border-transparent
                        ${path == "/aboutMe" ? "text-white" : "text-white/60 hover:text-white"}
                        transition-all duration-300 `}
                    >
                        About Me
                    </Link>

                    <Link
                        href="/projects"
                        className={` hover:text-white px-2 py-1 rounded-3xl whitespace-nowrap border-2 border-transparent
                        ${path.startsWith("/project") ? "text-white" : "text-white/60 hover:text-white"}
                        transition-all duration-300 `}
                    >
                        Projects
                    </Link>
                </nav>

            </div>

        </header>
    )
}