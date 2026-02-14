import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="relative w-full mt-8 md:mt-16">

      {/* BACKGROUND GLASS */}
      <div className="
        absolute inset-0
        bg-black/80
        backdrop-blur-xl
        border-t border-white/10
      " />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-16 text-white">

        {/* CTA */}
        <div className="
          mb-16
          flex flex-col md:flex-row
          items-start md:items-center
          justify-between
          gap-8
        ">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Disponible pour des missions freelance
            </h2>
            <p className="mt-2 text-white/60 max-w-md">
              Développement web, interfaces modernes et expériences sur mesure.
            </p>
          </div>
          <div className="flex md:flex-col gap-4 w-full md:w-auto justify-center">

            <a
              href="mailto:benjamin.fauchet@yahoo.com"
              className="
                inline-flex items-center
                rounded-full
                px-6 py-3
                bg-white/10
                backdrop-blur-md
                border border-white/20
                text-white
                font-medium
                transition-all duration-300
                hover:bg-white/20
                hover:-translate-y-1
              "
            >
              Me contacter
            </a>
            <a href="/assets/files/CV_Benjamin_FAUCHET.pdf" download className="
                inline-flex items-center justify-center
                rounded-full
                px-6 py-3
                bg-white/10
                backdrop-blur-md
                border border-white/20
                text-white
                font-medium
                transition-all duration-300
                hover:bg-white/20
                hover:-translate-y-1

                transition-all duration-300

              "><span className="pr-2">

                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#ffffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
                CV
              </a>
          </div>

        </div>

        {/* LINKS */}
        <div className="
          grid grid-cols-2 md:grid-cols-4
          gap-8
          text-sm
        ">
          <FooterLink label="Accueil" href="/" />
          <FooterLink label="À propos" href="/aboutMe" />
          <FooterLink label="Projets" href="/projects" />
          <FooterLink label="LinkedIn" href="https://linkedin.com" />
          
        </div>

        {/* BOTTOM */}
        <div className="
          mt-16
          flex flex-col md:flex-row
          justify-between
          items-center
          text-xs text-white/40
          gap-4
        ">
          <p>© {new Date().getFullYear()} Fauchet Benjamin</p>
          <p>Design & développement sur mesure</p>
        </div>
      </div>
    </footer>
  )
}
