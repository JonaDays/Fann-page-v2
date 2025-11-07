import React from 'react'
import fann_biography from '../assets/fann3.jpg'


const Tratamientos = () => {
  return (
    <>
        <div className='bg-[url("/src/assets/bg_2.jpg")] bg-no-repeat bg-cover bg-center h-auto pb-8'>
            <h1 className="text-3xl font-semibold text-center mx-auto pt-10">Nuestros Tratamientos</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
            <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto pb-20">
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src='https://res.cloudinary.com/dwy4sowpy/image/upload/v1760386028/botox_r2061z.jpg'
                        alt="image"
                        loading="lazy"/>
                     <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-5 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">T. Faciales</h1>
                        <a href='#' className="hover:-translate-y-0.5 transition">
                            <button type="button" className="bg-white text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-500/30">
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5l-5-5"/></svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src='https://res.cloudinary.com/dwy4sowpy/image/upload/v1760386032/skin_treatments_cpnemr.jpg'
                        alt="image"
                        loading="lazy"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-5 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">T. Piel</h1>
                        <a href='#' className="hover:-translate-y-0.5 transition">
                            <button type="button" className="bg-white text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-500/30">
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5l-5-5"/></svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src='https://res.cloudinary.com/dwy4sowpy/image/upload/v1760386027/body_treatment_azhjvn.jpg'
                        alt="image"
                        loading="lazy"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-5 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">T. Corporales</h1>
                        <a href='#' className="hover:-translate-y-0.5 transition">
                            <button type="button" className="bg-white text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-500/30">
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5l-5-5"/></svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src='https://res.cloudinary.com/dwy4sowpy/image/upload/v1760386025/aparatologia_treatment_pxzjht.jpg'
                        alt="image"
                        loading="lazy"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-5 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Laser y aparatología</h1>
                        <a href='#' className="hover:-translate-y-0.5 transition">
                            <button type="button" className="bg-white text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-500/30">
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5l-5-5"/></svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src='https://res.cloudinary.com/dwy4sowpy/image/upload/v1760386029/depilacion_treatment_g8sjdh.jpg'
                        alt="image"
                        loading="lazy"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-5 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Depilación laser</h1>
                        <a href='#' className="hover:-translate-y-0.5 transition">
                            <button type="button" className="bg-white text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-500/30">
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5l-5-5"/></svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src='https://res.cloudinary.com/dwy4sowpy/image/upload/v1760386828/mika-baumeister--kW1TvBKk1s-unsplash_rjmdkf.jpg'
                        alt="image"
                        loading="lazy"/>
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-5 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Otros tratamientos</h1>
                        <a href='#' className="hover:-translate-y-0.5 transition">
                            <button type="button" className="bg-white text-gray-500 active:scale-95 transition text-sm flex items-center px-4 py-2 gap-2 rounded w-max border border-gray-500/30">
                                Más información
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5l-5-5"/></svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl">
                <img src={fann_biography}
                    alt="newsletter" className="md:block w-full max-w-lg rounded-xl"/>
                <div className="relative flex items-center justify-center">
                    <div className="max-md:py-20 px-6 md:px-10 text-center">
                        <h1 className="text-3xl font-bold">
                            Dra. Estefanía Salazar
                        </h1>
                        <p className="mt-4 text-gray-500 text-justify font-semibold">
                            Soy médica estética apasionada por ayudar a mis pacientes a cuidar, mejorar y realzar su belleza natural a través de tratamientos personalizados basados en ciencia, seguridad y resultados reales. Mi enfoque combina lo mejor de la medicina estética moderna con una visión integral del bienestar
                        </p>
                        <p className="mt-4 text-gray-500 text-justify font-semibold">
                            Trabajo con tecnología láser de última generación y los equipos más avanzados y reconocidos, lo que me permite ofrecer procedimientos seguros, precisos y efectivos. Además, todos los productos que utilizamos provienen de laboratorios reconocidos internacionalmente, garantizando la mejor calidad en cada tratamiento.
                        </p>
                        <p className="mt-4 text-gray-500 text-justify font-semibold">
                            Con formación médica sólida y especialización en procedimientos estéticos, he desarrollado experiencia en el manejo de piel, rejuvenecimiento facial, tratamientos corporales y protocolos innovadores. Mi compromiso es mantenerme en constante actualización para brindar a mis pacientes lo más avanzado en tecnologías, técnicas y productos dentro del cuidado estético.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Tratamientos
