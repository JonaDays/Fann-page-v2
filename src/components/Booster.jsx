import React from 'react'

const Booster = () => {
  return (
    <div>
        <section className="relative h-screen flex flex-col items-center justify-end text-white py-25 px-3">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full z-1 absolute object-cover" src="https://res.cloudinary.com/dwy4sowpy/video/upload/f_mp4/v1762188057/5794419_Coll_wavebreak_Hospital_1920x1080_jcen2z.mov" type="video/mp4" autoPlay muted loop></video>
            </div>
            <div className="z-2 flex flex-col items-center text-center px-6 md:px-22 lg:px-32 xl:px-42 text-white">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-8xl">
                    Skinboosters <br /> 
                </h1>
                    <p className="mt-8 text-lg font-semibold text-pretty text-gray-300 sm:text-3xl/8">Belleza que se siente, luminosidad que se nota.</p>


                    <div className="button-bg rounded-full p-0.5 hover:scale-105">
                    <a href="https://wa.me/5212227397249" className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all">
                        Agendar cita
                        <svg className="group-hover:translate-x-0.5 transition" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#1E1E1E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                    </div>
            </div>
        </section>
        <section className="relative flex flex-col items-center text-slate-800 md:px-14 lg:px-22 xl:px-30 text-sm pb-16 bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/dot-pattern-redical.svg)] bg-center bg-cover">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full mt-24">
                    <div className="max-md:px-4 lg:w-[80%]">
                        <h1 className="text-4xl md:text-[70px] md:leading-[4.7rem] font-semibold max-w-3xl bg-gradient-to-r from-black to-slate-600 bg-clip-text text-transparent pb-5">
                            Skinboosters: glow real, sin filtros.
                        </h1>
                        <p className="font-cinzel text-md/7 md:text-lg/10 max-w-lg mt-3 text-slate-500 text-justify">
                            Microinyecciones de ácido hialurónico que hidratan y nutren la piel desde las capas más profundas. Estimulan la producción de colágeno, y mejoran visiblemente la calidad de la piel.
                        </p>
                        <p className="font-cinzel text-md/7 md:text-lg/10 max-w-lg mt-3 text-slate-500 text-justify">
                            Este tratamiento innovador fue diseñado específicamente para aumentar los niveles de hidratación proporcionando un efecto glow, suavidad y luminosidad. Ideal para pieles deshidratadas, apagadas o con primeros signos de envejecimiento.
                        </p>
                        <p className="font-cinzel text-md mt-2 text-slate-600 font-bold pt-5">
                            - Duración de la sesión: 40min.
                        </p>
                        <p className="font-cinzel text-md mt-2 text-slate-600 font-bold pt-5">
                            - Recuperación: no es necesaria.
                        </p>
                        <p className="font-cinzel text-md mt-2 text-slate-600 font-bold pt-5">
                            - Sesiones: 2 o 3 
                        </p>
                    </div>
                    <div clasclassNames="relative">
                        <div className="absolute inset-0 z-[-1] rounded-lg bg-gradient-to-r from-[#661FFF] via-[#7dff19] to-[#2D73FF] blur-2xl opacity-50"></div>
                        <img className="max-w-md w-full max-h-[560px] rounded-[40px] max-md:px-3 md:mr-10" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1762188948/pexels-arina-shilyaeva-1586333-3048715_xvwdcj.jpg" alt=""/>
                    </div>
                </div>
            
        </section>
        <hr className="border-t border-gray-300" />
      
    </div>
  )
}

export default Booster