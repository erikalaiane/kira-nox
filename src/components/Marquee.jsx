function Marquee() {
  const items = [
    "Sound Design",
    "Music Producer",
    "Experimental",
    "Alternative",
    "Void Sessions",
    "Sound Design",
    "Music Producer",
    "Experimental",
    "Alternative",
    "Void Sessions",
  ]

  return (
    <div className="relative w-full overflow-hidden bg-kira-terra/10 border-y border-kira-gold/10 py-4">

      {/* Gradiente nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-kira-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-kira-bg to-transparent z-10 pointer-events-none" />

      {/* Faixa rolando */}
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span key={index} className="flex items-center">
            <span className="font-display text-kira-gold/70 text-2xl tracking-widest uppercase px-6">
              {item}
            </span>
            <span className="text-kira-terra text-lg">✦</span>
          </span>
        ))}
      </div>

    </div>
  )
}

export default Marquee