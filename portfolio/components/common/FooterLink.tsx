export default function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="
        group
        inline-flex flex-col

        transition-all duration-200
      "
    >
      <span
        className="
          text-white/80
          transition-all duration-200
          group-hover:text-white
          group-hover:-translate-y-1

        "
      >
        {label}
      </span>

      <span
        className="
          mt-2
          h-px w-0
          bg-white/40
          transition-all duration-300
          group-hover:w-6
          group-hover:-translate-y-1

        "
      />
    </a>
  )
}
