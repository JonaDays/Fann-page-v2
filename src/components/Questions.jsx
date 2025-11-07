import React from 'react'

const Questions = () => {
                const [openIndex, setOpenIndex] = React.useState(null)
                const faqsData = [
                    {
                        question: '¿Cuándo puedo notar los resultados de un tratamiento estético?',
                        answer: 'Depende del procedimiento. Algunos resultados son inmediatos (como en el caso del ácido hialurónico o el Botox), mientras que otros, como los bioestimuladores o el ADN de salmón, se notan progresivamente a medida que la piel se regenera.'
                    },
                    {
                        question: '¿Cuánto duran los resultados de los tratamientos?',
                        answer: 'Depende del tipo de tratamiento, la piel y el estilo de vida del paciente. En promedio, los efectos pueden durar de 4 meses a 2 años, según si se trata de neuromoduladores, rellenos, bioestimuladores o protocolos de regeneración.'
                    },
                    {
                        question: '¿Qué tratamientos ayudan a mejorar las cicatrices de acné?',
                        answer: 'Existen varios, como microagujas con tecnología Endymed, láser fraccionado, peeling médico y protocolos con ADN de salmón. La elección depende del tipo y profundidad de las cicatrices.'
                    },
                    {
                        question: '¿Qué puedo hacer si tengo manchas en la piel?',
                        answer: 'Los peeling despigmentantes, láser y protocolos con activos regeneradores ayudan a mejorar el tono de la piel. Además, es fundamental usar protector solar diario y productos despigmentantes personalizados'
                    },
                    {
                        question: '¿Qué cuidados debo tener después de un tratamiento facial?',
                        answer: 'Evitar la exposición solar directa, no maquillarse durante las primeras horas, hidratar la piel y seguir las recomendaciones médicas. Cada procedimiento tiene cuidados específicos que se explican al finalizar la sesión.'
                    },
                    {
                        question: '¿Es necesario realizar una valoración antes de cualquier tratamiento?',
                        answer: 'Sí. Cada piel es única. En la valoración médica se analizan tus necesidades, historial y objetivos para diseñar un protocolo personalizado y seguro.'
                    },
                    {
                        question: '¿Cómo saber qué tratamiento es el más adecuado para mí?',
                        answer: 'Cada piel es diferente y tiene necesidades únicas. Por eso, lo ideal es realizar una valoración médica personalizada, donde analizamos el estado de tu piel, tus hábitos y tus objetivos. A partir de ahí diseñamos un protocolo a tu medida, combinando ciencia, tecnología.'
                    },
                    {
                        question: '¿A qué edad puedo someterme a procedimientos estéticos?',
                        answer: 'No hay una edad exacta; depende más de la necesidad de tu piel que del número de años.'
                    },
                ]
                return (
                    <div>

                        <div class="absolute w-full h-55 inset-0 bg-white dark:bg-gray-500">
                            <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.15]">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                                    <path 
                                        d="M25 0 L50 14.4 L50 38.4 L25 51.8 L0 38.4 L0 14.4 Z" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1"
                                        class="text-blue-500/40 dark:text-blue-400/30"
                                    />
                                    <path 
                                        d="M25 0 L50 14.4 L50 38.4 L25 51.8 L0 38.4 L0 14.4 Z" 
                                        transform="translate(50, 25.9)" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1"
                                        class="text-purple-500/40 dark:text-purple-400/30"
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
                            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_60%)]" />
                            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_60%)]" />
                            </div>

                        <div className='flex flex-col items-center text-center text-slate-800 px-3 pt-70 pb-15'>
                            
                            
                            <p className='text-4xl font-medium text-slate-600'>FAQ</p>
                            <h1 className='text-3xl md:text-4xl font-semibold mt-2'>Preguntas frecuentes</h1>
                            <p className='text-sm text-slate-500 mt-4 max-w-sm'>
                                Si tienes dudas sobre los tratamientos, no dudes en contactarnos. Siempre estamos respondiendo a sus preguntas de manera proactiva.
                            </p>
                            <div className='text-md font-semibold max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
                                {faqsData.map((faq, index) => (
                                    <div key={index} className='flex flex-col items-start w-full'>
                                        <div className='flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                            <h2 className='text-sm'>{faq.question}</h2>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className={`text-md text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className="border-t border-gray-300" />
                    </div>

                )
        }

export default Questions
