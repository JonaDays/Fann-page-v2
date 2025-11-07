import { FaBusinessTime } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { BsInstagram, BsTiktok, BsFacebook, BsYoutube } from 'react-icons/bs';
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Contact = () => {
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

        <div className="w-full md:pl-20 md:w-full max-md:text-center mx-2 md:mx-auto bg-white p-10"></div>
        
        <div className='flex flex-wrap items-stretch justify-center gap-8'>
            <div className="p-8 bg-white rounded-lg shadow w-80 h-96 flex flex-col justify-between">
                <p className="text-gray-900 text-xl font-semibold uppercase">Contactanos</p>
                <p className="text-gray-500 text-sm">Telefono:</p>
                <a href="tel:+522227397249">
                <p className="text-gray-900 font-semibold text-sm mb-3 hover:scale-105 hover:underline hover:decoration-2 hover:decoration-black hover:underline-offset-4">+52 2227 397249</p>
                </a>
                <img className="rounded-md" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760637347/pexels-joenibraw-1416530_qf6ey0.jpg" alt=""/>
            </div>
            <div class="p-8 bg-white rounded-lg shadow w-80 h-96 flex flex-col justify-between">
                <p class="text-gray-900 text-xl font-semibold uppercase">Siguenos</p>
                <p class="text-gray-500 text-sm">Unete a nuestra comunidad en redes</p>
                <p class="text-gray-900 font-semibold text-sm mb-3">y enterate de nuestras promociones.</p>
                <img class="rounded-md" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760637741/internet-3113279_1280_ty7qww.jpg" alt=""/>
            </div>
            <div class="p-8 bg-white rounded-lg shadow w-80 h-96 flex flex-col justify-between">
                <p class="text-gray-900 text-xl font-semibold uppercase">Horarios de atención</p>
                <p class="text-gray-900 font-semibold text-sm mb-3 text-justify">📍San Martin Texmelucan: Miercoles a sabado de 9am a 2:00pm y de 4:00pm a 7:00pm</p>
                <p class="text-gray-900 font-semibold text-sm mb-3 text-justify">📍Puebla, Puebla: Lunes y martes de 9am a 2:00pm y de 4:00pm a 7:30pm</p>
                <img class="rounded-md" src="https://res.cloudinary.com/dwy4sowpy/image/upload/v1760637920/pexels-pixabay-48770_yuijns.jpg" alt=""/>
            </div>
        </div>

        <div className="w-full md:pl-20 md:w-full max-md:text-center mx-2 md:mx-auto bg-white p-10"></div>

        <h1 className="text-3xl font-semibold text-center mx-auto">Sigue nuestro trabajo en nuestras redes sociales</h1>


        <div className="flex flex-wrap items-center justify-center gap-8 pt-12 pb-15">
            <div className="max-w-72 w-full text-[12rem] text-center">
                <div className="flex justify-center pb-10 hover:scale-105">
                    <a href='https://www.instagram.com/dra.estefaniasalazar?igsh=Nzc1Mzg5dGtnNXB6'><BsInstagram className="drop-shadow-[8px_10px_12px_rgba(0,0,0,0.6)]" /></a>
                </div>
                <h3 className="text-5xl text-slate-900 mt-3 font-italianna">+7K</h3>
                <div className="flex justify-center">
                    <button className="border text-sm text-gray-500 border-gray-300 w-28 h-8 mt-5 flex items-center justify-center gap-1 hover:scale-105">
                        <a href='https://www.instagram.com/dra.estefaniasalazar?igsh=Nzc1Mzg5dGtnNXB6'><p className="mb-1">INSTAGRAM</p></a>
                    </button>
                </div>
            </div>
            <div className="max-w-72 w-full text-[12rem] text-center">
                <div className="flex justify-center pb-10 hover:scale-105">
                    <a href='https://www.tiktok.com/@doc.fannsalazar?_t=ZS-90MM4EmTinR&_r=1'><BsTiktok className="drop-shadow-[8px_10px_12px_rgba(0,0,0,0.6)]" /></a>
                </div>                
                <h3 className="text-5xl text-slate-900 mt-3 font-italianna">+7K</h3>
                <div className="flex justify-center">
                    <button className="border text-sm text-gray-500 border-gray-300 w-28 h-8 mt-5 flex items-center justify-center gap-1 hover:scale-105">
                        <a href='https://www.tiktok.com/@doc.fannsalazar?_t=ZS-90MM4EmTinR&_r=1'><p className="mb-1">TIK TOK</p></a>
                    </button>
                </div>
            </div>
            <div className="max-w-72 w-full text-[12rem] text-center">
                <div className="flex justify-center pb-10 hover:scale-105">
                    <a href='/'><BsFacebook className="drop-shadow-[8px_10px_12px_rgba(0,0,0,0.6)]" /></a>
                </div>                
                <h3 className="text-5xl text-slate-900 mt-3 font-italianna">+7K</h3>
                <div className="flex justify-center">
                    <button className="border text-sm text-gray-500 border-gray-300 w-28 h-8 mt-5 flex items-center justify-center gap-1 hover:scale-105">
                        <a href='/'><p className="mb-1">FACEBOOK</p></a>
                    </button>
                </div>
            </div>
            <div className="max-w-72 w-full text-[12rem] text-center">
                <div className="flex justify-center pb-10 hover:scale-105">
                    <a href='/'><BsYoutube className="drop-shadow-[8px_10px_12px_rgba(0,0,0,0.6)]"/></a>
                </div>                
                <h3 className="text-5xl text-slate-900 mt-3 font-italianna">+7K</h3>
                <div className="flex justify-center">
                    <button className="border text-sm text-gray-500 border-gray-300 w-28 h-8 mt-5 flex items-center justify-center gap-1 hover:scale-105">
                        <a href='/'><p className="mb-1">YOUTUBE</p></a>
                    </button>
                </div>
            </div>
        </div>

        <hr className="border-t border-gray-300" />


    </div>
  )
}

export default Contact
