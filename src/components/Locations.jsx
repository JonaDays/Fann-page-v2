
const Locations = () => {
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

        <div className="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl pt-15 pb-15">
          <div className="block w-full max-w-lg rounded-l-xl">
            <iframe className="w-full h-[450px] rounded-l-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.777469721292!2d-98.44896912516062!3d19.292041081957475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfd5006175bf51%3A0x86545dc15e0282e7!2sCentro%20M%C3%A9dico%20VIDA!5e0!3m2!1sen!2smx!4v1760391535191!5m2!1sen!2smx"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>

          <div className="relative flex items-center justify-items-start">
              <div className="max-md:py-20 px-6 md:px-10 text-center">
                  <h1 className="text-3xl font-bold">
                      <span className="text-[#556B2F]">Consultorio</span> SAN MARTÍN
                  </h1>
                  <p className="mt-4 text-gray-500 font-cinzel">
                      Centro médico vida. <br></br>
                      200m antes de llegar al club de leones. <br></br>
                      San Martín Texmelucan, Puebla <br></br>
                      Carretera federal Mexico Puebla. No 718.
                  </p>
                  <button className="inline-flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#556B2F] to-[#c2c8b8] py-3 px-8 rounded-full text-white">
                    <a href="https://wa.me/5212227397249"> <span>Hacer una cita</span></a>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                            fill="#fff" />
                    </svg>
                </button>
                  <button className="px-8 py-3 mt-4 text-sm text-gray-800 font-Lato">
                      Recuerde agendar una cita antes de visitar nuestras instalaciones.
                  </button>
              </div>
              <div className="h-100 w-px bg-gray-300"></div>
          </div>
      </div>

      <hr className="border-t border-gray-300" />

      <div className="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl pt-15 pb-15">
        <div className="relative flex items-center justify-items-start">
          <div className="h-100 w-px bg-gray-300"></div>
              <div className="max-md:py-20 px-6 md:px-10 text-center">
                  <h1 className="text-3xl font-bold">
                      <span className="text-[#556B2F]">Consultorio</span> PUEBLA
                  </h1>
                  <p className="mt-4 text-gray-500 font-cinzel">
                    Torres Medicas 1 Angelópolis  consultorio 712
                  </p>
                  <button className="inline-flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#556B2F] to-[#c2c8b8] py-3 px-8 rounded-full text-white">
                    <a href="https://wa.me/5212227397249"> <span>Hacer una cita</span></a>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                            fill="#fff" />
                    </svg>
                </button>
                  <button className="px-8 py-3 mt-4 text-sm text-gray-800 font-Lato">
                      Recuerde agendar una cita antes de visitar nuestras instalaciones.
                  </button>
              </div>
          </div>
          <div className="block w-full max-w-lg rounded-l-xl">
            <iframe className="w-full h-[450px] rounded-l-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9895168739076!2d-98.2650498!3d19.0201836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc79e11261859%3A0xae0be8a01f34c4eb!2sMedical%20Towers%20Angel%C3%B3polis!5e0!3m2!1sen!2smx!4v1760495529645!5m2!1sen!2smx"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          
      </div>
      <hr className="border-t border-gray-300" />
    </div>
  )
}

export default Locations
