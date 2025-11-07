import React from 'react'

const Procedimientos = () => {
  return (
    <div>

      <div className="relative w-full h-55 inset-0 bg-white dark:bg-gray-500">
        <div className=" inset-0 opacity-[0.2] dark:opacity-[0.15]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path 
                    d="M25 0 L50 14.4 L50 38.4 L25 51.8 L0 38.4 L0 14.4 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    className="text-blue-500/40 dark:text-blue-100/30"
                />
                <path 
                    d="M25 0 L50 14.4 L50 38.4 L25 51.8 L0 38.4 L0 14.4 Z" 
                    transform="translate(50, 25.9)" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    className="text-purple-500/40 dark:text-purple-400/30"
                />
                </pattern>
                
                <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                </linearGradient>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#hexagons)" />
            <rect width="100%" height="100%" fill="url(#hex-gradient)" />
            </svg>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_60%)]" />
    </div>
      
      <h1 className="text-3xl font-semibold text-center mx-auto text-slate-600 pt-10 pb-10">Inyectables/Rostro</h1>

      <section className="flex flex-wrap items-center justify-center gap-6">
        <div className="relative flex items-center justify-center text-lg text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center font-bold">Bótox.</p>
                <a href="/botox">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760388198/woman-getting-facial-beauty-injection-wellness-center_npsfhd.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Reducción de papada.</p>
                <a href="/papada">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760387886/pexels-thirdman-8053956_hnehce.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Perfilamiento facial.</p>
                <a href="/perfilamiento">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760456906/pexels-alexey-dulin-19422188-31403887_wgj1x5.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Relleno de labios.</p>
                <a href="/relleno">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760457627/pexels-wesleydavi-30863545_fgfbww.jpg" alt=""/>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-6 pt-10">
        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Rinomodelación.</p>
                <a href="/rino">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760459094/alexander-krivitskiy-T7wClOL3fMA-unsplash_ljqgky.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Skinboosters.</p>
                <a href="/booster">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760459293/pexels-alexander-mass-748453803-29648626_tlzc4y.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">ADN de salmón.</p>
                <a href="/adn">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760459434/pexels-shvetsa-4586713_pejsw2.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Radiesse.</p>
                <a href="/radiesse">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760459511/mariia-belinska-y37xruRmhcQ-unsplash_tkeebf.jpg" alt=""/>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-center gap-6 pt-10">
        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Sculptra.</p>
                <a href="/sculptra">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760459578/pexels-cottonbro-7581578_ms2dy0.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Ellanse.</p>
                <a href="/ellanse">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760459842/korean-9857814_1280_r3hncb.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Ojeras.</p>
                <a href="/ojeras">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760459583/pexels-cottonbro-7582568_yhcfhz.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Armonización facial.</p>
                <a href="/armonizacion">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760457484/woman-8852468_et1urw.jpg" alt=""/>
        </div>
      </section>

      <h1 className="text-3xl font-semibold text-center mx-auto text-slate-600 pt-10 pb-10">Piel</h1>

      <section className="flex flex-wrap items-center justify-center gap-6">
        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Dermapen.</p>
                <a href="/derma">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760715617/person-getting-micro-needling-beauty-treatment_latjk4.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Peeling.</p>
                <a href="/peel">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760716652/pexels-polina-kovaleva-6543489_gpmlt0.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Diamond Glow.</p>
                <a href="/diamond">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760715775/young-woman-lying-cosmetologist-s-table-rejuvenation-procedure_u4cjwn.jpg" alt=""/>
        </div>
      </section>
      <section className="flex flex-wrap items-center justify-center gap-6 pt-10">
          <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Cicatrices de acné.</p>
                <a href="/cicatriz">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760715902/woman-cosmetology-studio-laser-hair-removal_rh4x3l.jpg" alt=""/>
        </div>
        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-160 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Peeling Cosmelan.</p>
                <a href="/cosmelan">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760716833/pexels-maria-alejandra-133962589-10192208_rzgxfv.jpg" alt=""/>
        </div>

      </section>
            <h1 className="text-3xl font-semibold text-center mx-auto text-slate-600 pt-10 pb-10">Tratamientos Corporales</h1>

      <section className="flex flex-wrap items-center justify-center gap-6">
        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Reducción de grasa.</p>
                <a href="/grasa">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760717089/pexels-annushka-ahuja-7991934_m9dn3l.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Celulitis.</p>
                <a href="/celulitis">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760718834/pexels-cottonbro-4153609_ed96y3.jpg" alt=""/>
        </div>

        <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm w-80 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute bottom-2 flex items-center justify-around backdrop-blur-sm w-full max-w-72 rounded bg-white/10 border border-white/20 py-2">
                <p className="text-center">Estrias.</p>
                <a href="/estrias">
                  <button type="button" className="bg-black/50 rounded-full px-6 py-1.5 hover:scale-105 hover:bg-gray-900">Saber más</button>
                </a>
            </div>
            <img className="rounded-md h-120 w-full object-cover" loading="lazy" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760718932/monika-kozub-Cdv4Oe6O_3w-unsplash_prpg0y.jpg" alt=""/>
        </div>
      </section>
      
    </div>
  )
}

export default Procedimientos
