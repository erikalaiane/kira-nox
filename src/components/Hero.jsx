function Hero() {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden bg-kira-bg flex items-center justify-center mt-20 px-16">

      {/* Blobs de luz */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-kira-terra/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-kira-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-kira-terra/10 rounded-full blur-3xl pointer-events-none" />

      {/* Tipografia gigante atrás de tudo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none">
        <span className="font-display text-[20vw] leading-none text-kira-gold/10 tracking-widest">
          KIRA
        </span>
        <span className="font-display text-[20vw] leading-none text-kira-gold/10 tracking-widest">
          NOX
        </span>
      </div>

      {/* Tagline vertical esquerda */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-kira-cream/20 text-[10px] tracking-[0.4em] uppercase whitespace-nowrap z-10">
        Sound Producer — Experimental — Alternative
      </div>

      {/* CAIXA GLASSMORPHISM CENTRAL */}
        <div className="relative z-10 w-full max-w-6xl h-[85%] flex border border-kira-gold/50 bg-kira-dark/30 backdrop-blur-md overflow-hidden rounded-2xl">
        {/* ESQUERDA — imagem */}
        <div className="relative w-[50%] h-full flex items-end justify-center overflow-hidden">

          {/* Detalhes flutuantes */}
          <div className="absolute top-6 left-6 flex flex-col gap-1 z-20">
            <span className="text-kira-cream/30 text-[10px] tracking-[0.3em] uppercase">Credential —</span>
            <span className="text-kira-gold/60 text-[10px] tracking-[0.2em] uppercase">Music Producer</span>
            <span className="text-kira-cream/30 text-[10px] tracking-[0.2em] uppercase">Sound Design</span>
          </div>

          <div className="absolute top-6 right-6 flex gap-1 z-20">
            <div className="w-3 h-3 bg-kira-terra" />
            <div className="w-3 h-3 bg-kira-gold" />
            <div className="w-3 h-3 bg-kira-cream/40" />
            <div className="w-3 h-3 bg-kira-terra/40" />
          </div>

          <div className="absolute left-6 top-1/3 border border-kira-gold/30 px-3 py-1 z-20">
            <span className="text-kira-gold/60 text-[10px] tracking-widest uppercase">✦ Experimental</span>
          </div>

          {/* Gradiente pra suavizar borda da imagem */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-kira-dark/40 z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-kira-dark/40 to-transparent z-10 pointer-events-none" />

          <img
            src="/src/assets/kira.png"
            alt="Kira Nox"
            className="relative z-0 h-[100%] object-contain object-bottom"
          />
        </div>

        {/* Divisor vertical */}
        <div className="w-px bg-kira-terra/40 self-stretch" />

        {/* DIREITA — cards e info */}
        <div className="w-[50%] h-full flex flex-col justify-center gap-4 p-8">

          {/* Topo com ano e quadradinhos */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-kira-cream/30 text-[10px] tracking-[0.4em] uppercase">Est. 2024</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-kira-terra/60" />
              <div className="w-3 h-3 border border-kira-gold/40" />
              <div className="w-3 h-3 border border-kira-gold/40" />
            </div>
          </div>

          {/* Tagline */}
          <div className="flex flex-col gap-1">
            <p className="font-display text-kira-gold text-5xl leading-tight tracking-widest">
              SOUND HAS
            </p>
            <p className="font-display text-kira-gold text-5xl leading-tight tracking-widest">
              NO SHAPE.
            </p>
            <p className="text-kira-cream/40 text-xs tracking-[0.5em] uppercase mt-1">
              Until now.
            </p>
          </div>

          {/* Botões */}
          <div className="flex gap-3 mt-2">
            
             <a href="#contact"
              className="relative group overflow-hidden border border-kira-terra text-kira-cream text-xs tracking-widest uppercase px-5 py-3"
            >
              <span className="absolute inset-0 bg-kira-terra translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">✦ Book a Session</span>
            </a>
            
             <a href="#works"
              className="relative group overflow-hidden border border-kira-gold/30 text-kira-cream/60 text-xs tracking-widest uppercase px-5 py-3"
            >
              <span className="absolute inset-0 bg-kira-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">See Works →</span>
            </a>
          </div>

          {/* Divisor */}
          <div className="w-full h-px bg-kira-gold/10 my-2" />

          {/* Dois cards menores */}
          <div className="flex gap-3">
            <div className="border border-kira-gold/20 bg-kira-dark/40 p-4 flex flex-col gap-2 flex-1">
              <span className="text-kira-cream/30 text-[9px] tracking-[0.3em] uppercase">Latest Work</span>
              <span className="text-kira-gold text-sm font-display tracking-widest">VOID SESSIONS</span>
              <span className="text-kira-cream/40 text-[9px] tracking-[0.2em] uppercase">EP — 2024</span>
              <div className="w-6 h-px bg-kira-terra mt-1" />
            </div>

            <div className="border border-kira-gold/20 bg-kira-dark/40 p-4 flex flex-col gap-2 flex-1">
              <span className="text-kira-cream/30 text-[9px] tracking-[0.3em] uppercase">In Numbers</span>
              <span className="font-display text-kira-gold text-3xl">48+</span>
              <span className="text-kira-cream/40 text-[9px] tracking-[0.2em] uppercase">Tracks Produced</span>
              <div className="w-6 h-px bg-kira-terra mt-1" />
            </div>
          </div>

          {/* Scroll */}
          <div className="flex items-center gap-3 mt-2">
            <div className="w-8 h-px bg-kira-terra" />
            <span className="text-kira-cream/30 text-[9px] tracking-[0.4em] uppercase">Scroll to explore</span>
            <span className="text-kira-terra text-sm">↓</span>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero