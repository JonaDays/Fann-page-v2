import React from 'react'
import company_image from '../assets/company_logo.jpg'

const Companies = () => {
return(
    <div className='bg-[url("/src/assets/bg_2.jpg")] bg-no-repeat bg-cover bg-center h-auto'>
        <section class="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 pt-20 pb-20">
            <div class="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                <img class="max-w-md w-full object-cover rounded-2xl"
                    src={company_image}
                    alt=""/>
            </div>
            <div class="text-sm text-slate-600 max-w-lg">
                <h1 class="text-3xl uppercase font-semibold text-slate-700">Nosotros</h1>
                <div class="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#d1bea8] to-[#faf0e6]"></div>
                <p class="mt-8 text-xl font-semibold text-justify">Hola! Soy la Dra. Estefanía Salazar, médico estético. Mi misión es ayudarte a lograr una piel 
                    saludable y una belleza natural desde el conocimiento médico, con tratamientos personalizados
                    que respetan tu esencia y realzan tu belleza.</p>
                <p class="mt-4 text-xl font-semibold text-justify">Nuestro trabajo se respalda en tecnología de vanguardia reconocida a nivel mundial, y en el
                    uso de productos farmacéuticos de la más alta calidad en cada procedimiento.
                </p>
                <p class="mt-4 text-xl font-semibold text-justify">Nuestra Clinica esta ubicada en las zonas más accesibles de San Martín Texmelucan y Puebla, estamos equipados para hacerte 
                    lucir radiante y contamos con las mas alta calidad de insumos y aparatología.</p>
                <button
                    class="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#d1bea8] to-[#faf0e6] py-3 px-8 rounded-full text-white">
                    <a href="https://wa.me/5212227397249"><span>Agendar cita</span></a>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                            fill="#fff" />
                    </svg>
                </button>
            </div>
        </section>
    </div>
)
}

export default Companies
