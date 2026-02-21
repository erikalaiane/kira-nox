function Hero() {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden bg-kira-bg flex items-center justify-center mt-20">

      {/* Tagline vertical esquerda */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 text-kira-cream/40 text-xs tracking-[0.4em] uppercase whitespace-nowrap">
        Sound Producer — Experimental — Alternative
      </div>

      {/* Número decorativo direita */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 rotate-90 text-kira-cream/20 text-xs tracking-[0.4em] uppercase whitespace-nowrap">
        Est. 2024 — Vol. 01
      </div>

      {/* Tipografia gigante — atrás da imagem */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none">
        <span className="font-display text-[20vw] leading-none text-kira-gold/20 tracking-widest">
          KIRA
        </span>
        <span className="font-display text-[20vw] leading-none text-kira-gold/20 tracking-widest">
          NOX
        </span>
      </div>

      {/* Imagem da Kira — na frente das letras */}
      <div className="relative z-10 h-full flex items-end justify-center">

        {/* Detalhes flutuantes ao redor da imagem */}

        {/* Canto superior esquerdo da imagem */}
        <div className="absolute left-[18%] top-6 flex flex-col gap-1 text-left">
          <span className="text-kira-cream/30 text-[10px] tracking-[0.3em] uppercase">Credential —</span>
          <span className="text-kira-gold/60 text-[10px] tracking-[0.2em] uppercase">Music Producer</span>
          <span className="text-kira-cream/30 text-[10px] tracking-[0.2em] uppercase">Sound Design</span>
        </div>

        {/* Quadradinhos de cor — canto superior direito */}
        <div className="absolute right-[18%] top-8 flex gap-1">
          <div className="w-4 h-4 bg-kira-terra" />
          <div className="w-4 h-4 bg-kira-gold" />
          <div className="w-4 h-4 bg-kira-cream/40" />
          <div className="w-4 h-4 bg-kira-terra/40" />
        </div>

        {/* Tag flutuante esquerda */}
        <div className="absolute left-[14%] top-1/3 border border-kira-gold/30 px-3 py-1">
          <span className="text-kira-gold/60 text-[10px] tracking-widest uppercase">✦ Experimental</span>
        </div>

        {/* Tag flutuante direita */}
        <div className="absolute right-[14%] top-1/2 flex flex-col items-end gap-2">
          <span className="text-kira-cream/30 text-[10px] tracking-[0.3em] uppercase">Latest work</span>
          <span className="text-kira-gold text-[10px] tracking-[0.2em] uppercase">— Void Sessions EP</span>
          <div className="w-8 h-px bg-kira-terra" />
        </div>

        {/* Seta scroll embaixo direita */}
        <div className="absolute right-[16%] bottom-8 flex flex-col items-center gap-1">
          <span className="text-kira-cream/30 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <span className="text-kira-terra text-lg">↓</span>
        </div>

        <img
          src="/src/assets/kira.png"
          alt="Kira Nox"
          className="h-[90%] object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      {/* Tagline centralizada embaixo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-kira-cream/40 text-[10px] tracking-[0.5em] uppercase">
          Sound has no shape. Until now.
        </span>
      </div>

      {/* Blobs de luz */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-kira-terra/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-kira-gold/10 rounded-full blur-3xl pointer-events-none" />

    </section>
  )
}

export default Hero