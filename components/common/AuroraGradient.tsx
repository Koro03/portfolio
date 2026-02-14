export default function AuroraGradient() {
    return(
    <div className="absolute inset-0 opacity-60"
        style={{
            background: `
                radial-gradient(circle at 30% 140%, rgba(46,230,166,.35), transparent 40%),
                radial-gradient(circle at 60% 300%, rgba(90,160,255,.25), transparent 70%),
                radial-gradient(circle at 50% -40%, rgba(180,120,255,.25), transparent 60%),
                linear-gradient(transparent, rgba(13,10,25,.6))

            `
        }}
    />)
}