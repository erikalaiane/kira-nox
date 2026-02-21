const projects = [
  {
    type: 'EP',
    title: 'Void Sessions',
    year: '2024',
    tracks: '6 faixas',
    cover: '/src/assets/cover1.jpg',
    desc: 'Exploração sonora entre o ambient e o experimental.',
  },
  {
    type: 'Single',
    title: 'Hollow Frequency',
    year: '2024',
    tracks: '1 faixa',
    cover: '/src/assets/cover2.jpg',
    desc: 'Uma faixa densa construída em camadas de ruído branco.',
  },
  {
    type: 'Mixtape',
    title: 'Night Frequencies',
    year: '2024',
    tracks: '12 faixas',
    cover: '/src/assets/cover3.jpg',
    desc: 'Mixtape noturna com influências de lo-fi e ambient.',
  },
  {
    type: 'EP',
    title: 'Static Dreams',
    year: '2023',
    tracks: '5 faixas',
    cover: '/src/assets/cover4.jpg',
    desc: 'EP que explora transições entre silêncio e distorção.',
  },
  {
    type: 'Collab',
    title: 'Nox & Vale',
    year: '2023',
    tracks: '4 faixas',
    cover: '/src/assets/cover5.jpg',
    desc: 'Colaboração com a artista Vale, fusão de vozes e síntese.',
  },
  {
    type: 'Single',
    title: 'Pale Signal',
    year: '2023',
    tracks: '1 faixa',
    cover: '/src/assets/cover6.jpg',
    desc: 'Produção minimalista com influências de drone music.',
  },
  {
    type: 'Mixtape',
    title: 'Drift Vol. 1',
    year: '2023',
    tracks: '9 faixas',
    cover: '/src/assets/cover7.jpg',
    desc: 'Primeira mixtape — sons que derivam entre gêneros e texturas.',
  },
  {
    type: 'EP',
    title: 'Dark Matter',
    year: '2022',
    tracks: '7 faixas',
    cover: '/src/assets/cover8.jpg',
    desc: 'EP conceitual inspirado em física quântica e caos.',
  },
  {
    type: 'Collab',
    title: 'Echo Chamber',
    year: '2022',
    tracks: '3 faixas',
    cover: '/src/assets/cover9.jpg',
    desc: 'Projeto coletivo com producers do underground paulistano.',
  },
  {
    type: 'Single',
    title: 'Residual',
    year: '2022',
    tracks: '1 faixa',
    cover: '/src/assets/cover10.jpg',
    desc: 'Faixa experimental com samples de fitas cassete antigas.',
  },
  {
    type: 'Mixtape',
    title: 'Static Tapes',
    year: '2022',
    tracks: '11 faixas',
    cover: '/src/assets/cover11.jpg',
    desc: 'Mixtape gravada em uma semana, sem edições — crua e honesta.',
  },
  {
    type: 'Collab',
    title: 'Kira x Maren',
    year: '2022',
    tracks: '2 faixas',
    cover: '/src/assets/cover12.jpg',
    desc: 'Parceria com Maren, explorando texturas vocais e síntese.',
  },
  {
    type: 'Mixtape',
    title: 'Submerged',
    year: '2021',
    tracks: '8 faixas',
    cover: '/src/assets/cover13.jpg',
    desc: 'Mixtape de estreia — mergulho profundo em soundscapes aquáticos.',
  },
  {
    type: 'EP',
    title: 'Pulse Decay',
    year: '2021',
    tracks: '4 faixas',
    cover: '/src/assets/cover14.jpg',
    desc: 'Primeiro EP — marcou o início do som característico da Kira.',
  },
]

function Works() {
  return (
    <section id="works" className="relative w-full py-24 bg-kira-bg overflow-hidden">

      {/* Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-kira-terra/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="px-16 mb-12">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-kira-terra" />
              <span className="text-kira-cream/30 text-[10px] tracking-[0.5em] uppercase">Works</span>
            </div>
            <h2 className="font-display text-kira-cream text-6xl tracking-widest">
              PROJETOS <span className="text-kira-gold">✦</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-kira-cream/30 text-[10px] tracking-[0.3em] uppercase">Total</span>
            <span className="font-display text-kira-gold text-4xl">14</span>
            <span className="text-kira-cream/20 text-[9px] tracking-[0.3em] uppercase">Projetos</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 max-w-6xl mx-auto">
          <span className="text-kira-cream/20 text-[9px] tracking-[0.4em] uppercase">Passe o mouse para pausar</span>
          <span className="text-kira-terra text-sm">→</span>
        </div>
      </div>

      {/* Carrossel animado */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 pb-4 w-max"
          style={{ animation: 'works-marquee 50s linear infinite' }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0 w-72">
              <div
                className="border border-kira-gold/20 bg-kira-dark/40 backdrop-blur-sm rounded-2xl overflow-hidden group hover:border-kira-terra/60 hover:bg-kira-dark/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ transformOrigin: 'center', willChange: 'transform' }}
              >
                {/* Capa */}
                <div className="relative w-full overflow-hidden" style={{ height: '300px' }}>
                <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                  {/* Overlay escuro no hover */}
                  <div className="absolute inset-0 bg-kira-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Tag do tipo */}
                  <div className="absolute top-4 left-4 border border-white/20 bg-black/40 backdrop-blur-sm px-2 py-1">
                    <span className="text-white/80 text-[9px] tracking-widest uppercase">{project.type}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-kira-cream text-xl tracking-widest group-hover:text-kira-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-kira-cream/30 text-[9px] tracking-[0.3em] uppercase">
                        {project.tracks} — {project.year}
                      </span>
                    </div>
                    <span className="text-kira-terra text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>

                  <p className="text-kira-cream/40 text-xs leading-relaxed group-hover:text-kira-cream/60 transition-colors duration-300">
                    {project.desc}
                  </p>

                  <div className="w-full h-px bg-kira-gold/10 group-hover:bg-kira-terra/30 transition-colors duration-300 mt-1" />

                  <div className="flex items-center justify-between">
                    <span className="text-kira-gold/40 text-[9px] tracking-[0.3em] uppercase">Kira Nox</span>
                    <span className="text-kira-terra/60 text-[9px] tracking-[0.3em] uppercase">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Works