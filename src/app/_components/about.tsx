import Image from "next/image"
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"

export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container mx-auto px-4">

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div 
                    data-aos="fade-up-right"
                    data-aos-delay="300"
                    className="relative">

                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image 
                            src={about1Img}
                            alt="Foto do Cachorro"
                            fill
                            quality={100}
                            priority
                            className="object-cover hover:scale-110 duration-300"
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                            <Image 
                            src={about2Img}
                            alt="Foto do Gato"
                            fill
                            quality={100}
                            priority
                            />
                        </div>

                    </div>

                    <div 
                    className="space-y-6 mt-10" 
                    data-aos="fade-up-left"
                    data-aos-delay="300">
                        <h2 className="text-4xl font-bold uppercase">Sobre</h2>
                    <p>
                        Somos um petshop dedicado ao cuidado, bem-estar e felicidade dos seus melhores amigos. Trabalhamos com produtos de qualidade, atendimento atencioso e serviços especializados para garantir saúde, conforto e diversão para cães, gatos e outros pets. Nossa equipe é apaixonada por animais e está sempre pronta para oferecer orientação, carinho e soluções personalizadas para cada necessidade. Aqui, cada pet é tratado como parte da família.
                    </p>

                    <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe co  mais de 10 veterinários.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa preioridade
                            </li>
                    </ul>

                        <div className="flex gap-2">

                            <a 
                            href="#"
                            className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>

                            <a 
                            href="#"
                            className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da Loja
                            </a>

                        </div>

                    </div>

               </div>

            </div>
        </section>
    )
 }