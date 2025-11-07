import React from 'react'

const Citas = () => {
  return (
    <div className='bg-[url("/src/assets/citas.jpg")] bg-no-repeat bg-cover bg-center h-auto'>
        <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-gray-700 text-center">
                ¿Quieres mejorar tu piel pero <br /> no sabes que tratamiento necesitas?
            </h1>
            <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
            <p className="md:text-xl text-gray-700 max-w-lg text-center font-semibold">
                Agenda una cita de valoración para que podamos asesorarte
            </p>
            <a href="#" className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all">
                Agenda con Whatsapp
                <svg className="group-hover:translate-x-0.5 transition" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#1E1E1E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
        </div>
    </div>
  )
}

export default Citas
