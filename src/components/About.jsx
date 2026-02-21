function About() {
  return (
<section id="about" className="relative w-full pt-12 pb-32 px-16 bg-kira-bg overflow-hidden">

      {/* Blobs decorativos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kira-terra/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-kira-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Título da seção */}
      <div className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px bg-kira-terra" />
        <span className="text-kira-cream/30 text-[10px] tracking-[0.5em] uppercase">About</span>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex gap-16 items-center max-w-6xl mx-auto">

        {/* ESQUERDA — foto saindo do card */}
        <div className="relative w-[45%] flex-shrink-0">

          {/* Card glassmorphism */}
          <div className="relative border border-kira-gold/20 bg-kira-dark/40 backdrop-blur-sm rounded-2xl overflow-visible h-[500px]">

            {/* Detalhes dentro do card */}
            <div className="absolute top-6 left-6 flex flex-col gap-1 z-10">
              <span className="text-kira-cream/30 text-[9px] tracking-[0.3em] uppercase">Profile —</span>
              <span className="text-kira-gold/60 text-[10px] tracking-[0.2em] uppercase">Kira Nox</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="w-full h-px bg-kira-gold/10 mb-4" />
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-kira-cream/100 text-[9px] tracking-[0.3em] uppercase block">Based in</span>
                  <span className="text-kira-gold/100 text-[10px] tracking-[0.2em] uppercase">São Paulo, BR</span>
                </div>
                <div className="text-right">
                  <span className="text-kira-terra/100 text-[9px] tracking-[0.3em] uppercase block">Available for</span>
                  <span className="text-kira-gold/100 text-[10px] tracking-[0.2em] uppercase">Sessions & Collabs</span>
                </div>
              </div>
            </div>

            {/* Blob terracota atrás da imagem */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-kira-terra/30 rounded-full blur-2xl pointer-events-none" />

            {/* Imagem dentro do card */}
            <img
            src="/src/assets/about.png"
            alt="Kira Nox"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Tag flutuante fora do card */}
          <div className="absolute -right-6 top-1/3 border border-kira-gold/30 bg-kira-dark/60 backdrop-blur-sm px-4 py-2 z-30">
            <span className="text-kira-gold/60 text-[10px] tracking-widest uppercase">✦ Est. 2024</span>
          </div>

        </div>

        {/* DIREITA — texto */}
        <div className="flex flex-col gap-8 w-[55%]">

          {/* Título grande */}
          <div>
            <p className="font-display text-kira-gold/20 text-[8vw] leading-none tracking-widest select-none absolute">
              NOX
            </p>
            <h2 className="font-display text-kira-cream text-6xl leading-tight tracking-widest relative z-10">
              WHERE SOUND <br />
              <span className="text-kira-gold">BECOMES</span> ART.
            </h2>
          </div>

          {/* Texto */}
          <p className="text-kira-cream/50 text-sm leading-relaxed tracking-wide max-w-md">
            Kira Nox é uma produtora musical experimental baseada em São Paulo. 
            Com mais de 48 faixas produzidas, ela transita entre o alternativo e o 
            eletrônico, criando sonoridades que desafiam estruturas convencionais. 
            Seu trabalho é marcado por camadas densas, silêncios calculados e 
            uma identidade sonora inconfundível.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {['Music Production', 'Sound Design', 'Mixing', 'Mastering', 'Composition'].map((skill) => (
              <span
                key={skill}
                className="border border-kira-gold/20 text-kira-cream/50 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"              >
                {skill}
              </span>
            ))}
          </div>

          {/* Divisor e CTA */}
          <div className="flex items-center gap-6">
            <div className="w-full h-px bg-kira-gold/10" />
          </div>

          <div className="flex gap-4">
            
            <a  href="#works"
              className="relative group overflow-hidden border border-kira-terra text-kira-cream text-xs tracking-widest uppercase px-6 py-3"
            >
              <span className="absolute inset-0 bg-kira-terra translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">✦ See Works</span>
            </a>
            
             <a href="#contact"
              className="relative group overflow-hidden border border-kira-gold/30 text-kira-cream/60 text-xs tracking-widest uppercase px-6 py-3"
            >
              <span className="absolute inset-0 bg-kira-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Get in Touch →</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About