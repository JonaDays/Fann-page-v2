import React from 'react'
import video_hero from '../assets/video_1.mp4'
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';


const Hero = () => {
  return (
    <>
    <style>{`
    .social-media a { 
                    display:flex;
                    background: #ddd;
                    height: 40px;
                    width: 40px;
                    margin: 0 15px;
                    border-radius: 8px;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                                -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
                    transition: transform 0.5s;
                    }

    .social-media a i {
                    font-size:35px;
                    color: #777;
    }
    
    .social-media a:hover {
            box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                        inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                        -0.5px -0.5px 0px rgba(255,255,255,1),
                        0.5px 0.5px 0px rgba(0,0,0,0.15),
                        0px 12px 10px -10px rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.01);
            transform: translateY(2px);
    }
    
    .social-media a:hover i {
        transform: scale(0.90)
    }

    @keyframes shine {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }

    }
                                `}</style>

    <div>
        <section className="relative h-screen flex flex-col items-center justify-end text-white py-25 px-3">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full z-1 absolute object-cover" src={video_hero} type="video/mp4" autoPlay muted loop></video>
            </div>
            <div className="z-2 flex flex-col items-center text-center px-6 md:px-22 lg:px-32 xl:px-42 text-white">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-8xl">
                    MAS DE MIL <br /> 
                    <span className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-8xl">PIELES TRATADAS.</span>
                </h1>
                  <p className="mt-8 text-lg font-semibold text-pretty text-gray-300 sm:text-3xl/8">¿Tu también quieres lucir una piel increíble?</p>


                  <div className="button-bg rounded-full p-0.5 hover:scale-105">
                    <a href="https://wa.me/5212227397249" className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all">
                        Agendar cita
                        <svg className="group-hover:translate-x-0.5 transition" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#1E1E1E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                 </div>
            </div>
        </section>
        <div className="w-full flex items-center justify-between px-4 md:px-14 py-2 font-extrabold text-center bg-[#e3edf7]">
            <div className='social-media flex'>
                <a href='https://www.instagram.com/dra.estefaniasalazar?igsh=Nzc1Mzg5dGtnNXB6'><FaInstagram /></a>
                <a href='https://www.facebook.com/share/1A3yAeGFfE/?mibextid=wwXIfr'><FaFacebookF /></a>
                <a href='https://www.tiktok.com/@doc.fannsalazar?_t=ZS-90MM4EmTinR&_r=1'><FaTiktok /></a>
                <a href='https://wa.me/5212227397249'><FaWhatsapp /></a>
                <a href='https://wa.me/5212227397249'><FaYoutube /></a>
            </div>
            <div className="flex items-center space-x-6 hover:scale-105">
                <button type="button" className="font-normal text-gray-800 bg-white hover:bg-gray-200 px-7 py-2.5 rounded-full active:scale-95 transition-all">Ver descuentos</button>
                <button type="button">
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
