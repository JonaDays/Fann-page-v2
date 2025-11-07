import React from 'react'
import adn from '../assets/adn.mp4'
import armonizacion from '../assets/armon.MP4'
import estrias from '../assets/ESTRIAS.mp4'

const Nosotros_hero = () => {
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

        
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 pt-10 pb-15">
            <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                <video className="max-w-xs w-full object-cover rounded-2xl"
                    src={adn} autoPlay loop muted/>
            </div>
            <div className="text-sm text-slate-600 max-w-lg">
                <h1 className="text-xl uppercase font-semibold text-slate-700">Nosotros</h1>
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#d1bea8] to-[#faf0e6]"></div>
                <p className="font-poppins mt-8 text-justify">Hola! Soy la Dra. Estefanía Salazar, médico estético. Mi misión es ayudarte a lograr una piel saludable y una belleza natural desde el conocimiento médico, con tratamientos personalizados que respetan tu esencia y realzan tu belleza. </p>
                <p className="font-poppins mt-4 text-justify">Nuestro trabajo se respalda en tecnología de vanguardia reconocida a nivel mundial, y en el uso de productos farmacéuticos de la más alta calidad en cada procedimiento.</p>
                <p className="font-poppins mt-4 text-justify">Nuestra Clinica esta ubicada en las zonas más accesibles de San Martín Texmelucan y Puebla, estamos equipados para hacerte lucir radiante y contamos con las mas alta calidad de insumos y aparatología.</p>
            </div>
            <div className="hidden md:block h-150 w-px bg-gray-300"></div>
        </section>

        <hr className="hidden md:block border-t border-gray-300" />

        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 pt-15 pb-15">
            <div className="hidden md:block h-150 w-px bg-gray-300"></div>
            <div className="text-sm text-slate-600 max-w-lg">
                <h1 className="text-xl uppercase font-semibold text-slate-700">Misión</h1>
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#d1bea8] to-[#faf0e6]"></div>
                <p className="font-poppins mt-8 text-justify">Brindar atención médica estética con un enfoque humano, científico y personalizado, ayudando a cada paciente a sentirse y verse bien desde adentro.</p>
                <p className="font-poppins mt-4 text-justify">A través de tratamientos seguros, tecnología avanzada y acompañamiento integral, buscamos potenciar la belleza natural de cada persona, promoviendo el bienestar, la confianza y el autocuidado como parte esencial de una vida plena.</p>
            </div>
            <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                <video className="max-w-xs w-full object-cover rounded-2xl"
                    src={armonizacion} autoPlay loop muted/>
            </div>
        </section>

        <hr className="hidden md:block border-t border-gray-300" />

        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 pt-15 pb-20">
            <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                <video className="max-w-xs w-full object-cover rounded-2xl"
                    src={estrias} autoPlay loop muted/>
            </div>
            <div className="text-sm text-slate-600 max-w-lg">
                <h1 className="text-xl uppercase font-semibold text-slate-700">Visión</h1>
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#d1bea8] to-[#faf0e6]"></div>
                <p className="font-poppins mt-8 text-justify">Ser una clínica referente en medicina estética regenerativa y bienestar integral, reconocida por combinar ciencia, e innovación. </p>
                <p className="font-poppins mt-4 text-justify">Aspiramos a transformar la manera en que las personas viven el cuidado de su piel y su autoestima, inspirando una nueva cultura de belleza consciente, saludable y auténtica.</p>
                <button
                    className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#d1bea8] to-[#faf0e6] py-3 px-8 rounded-full text-black">
                    <span>Hacer una cita</span>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                            fill="#000" />
                    </svg>
                </button>
            </div>
            <div className="hidden md:block h-150 w-px bg-gray-300"></div>
        </section>

        <hr className="border-t border-gray-300" />


    </div>
  )
}

export default Nosotros_hero
