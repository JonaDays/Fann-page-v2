import React from 'react'
import logo from '../assets/Fann_letters.PNG'
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
        <div className='text-gray-700/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={logo} alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='text-sm font-semibold'>
                        DIRECCIÓN: 
                        Centro médico vida. <br />
                        200m antes de llegar al club de leones. <br />
                        San Martín Texmelucan, Puebla <br />
                        Carretera federal Mexico Puebla. No 718. <br />
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <div className='text-2xl text-gray-500 hover:scale-120 transition-all'>
                            <a href='https://www.instagram.com/dra.estefaniasalazar?igsh=Nzc1Mzg5dGtnNXB6'><FaInstagram/></a>
                        </div>
                        {/* Facebook */}
                        <div className='text-2xl text-gray-500 hover:scale-120 transition-all'>
                            <a href='https://www.facebook.com/share/1A3yAeGFfE/?mibextid=wwXIfr'><FaFacebookF/></a>
                        </div>
                        {/* Tiktok */}
                        <div className='text-2xl text-gray-500 hover:scale-120 transition-all'>
                            <a href='https://www.tiktok.com/@doc.fannsalazar?_t=ZS-90MM4EmTinR&_r=1'><FaTiktok/></a>
                        </div>
                        {/* Whatsapp */}
                        <div className='text-2xl text-gray-500 hover:scale-120 transition-all'>
                            <a href='https://wa.me/5212227397249'><FaWhatsapp/></a>
                        </div>
                        {/* Youtube */}
                        <div className='text-2xl text-gray-500 hover:scale-120 transition-all'>
                            <a href='https://wa.me/5212227397249'><FaYoutube/></a>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>Procedimientos</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">T. Faciales</a></li>
                        <li><a href="#">T. Piel</a></li>
                        <li><a href="#">T. Corporales</a></li>
                        <li><a href="#">Laser y aparatología</a></li>
                        <li><a href="#">Depilación laser</a></li>
                        <li><a href="#">Otros tratamientos</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>Accesos rápidos</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Procedimientos</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Ubicación</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="/">Jonathan Díaz</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
