import { useTranslation } from "react-i18next";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import ImagemFamilia from "@/assets/imagemFamilia.svg"
import Ponte from "@/assets/ponte.svg"
import maosLevantadas from "@/assets/maosLevantadas.svg"
import ceInstagram from "@/assets/ceInstagram.svg"
import pessoasSolidarias from "@/assets/pessoasSolidarias.svg"
import Cupons from "@/assets/cupons.svg"

function Destaques() {
    const { t } = useTranslation()
    return (
        <>
            <Carousel className="relative w-full mx-auto overflow-hidden shadow-[0px_4px_10px_0px_#807e7e]"
            // plugins={[
            //     Autoplay({
            //         delay: 4000,
            //     }),
            // ]} 
            >
                <CarouselContent className="flex transition-transform">
                    <CarouselItem className="min-w-full flex-shrink-0">
                        <div className="flex items-center justify-between h-screen bg-[#DAF1FF] p-5 text-black">
                            <div className="text-center mt-20 p-10">

                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">DOE E FAÇA A DIFERENÇA</p>
                                <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Quer fazer a diferença, mas não conhece nenhuma ONG?</p>
                                <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>ONGs Parceiras</button></a>
                            </div>
                            <img className="h-screen pt-52" src={ImagemFamilia} alt="Ilustração de uma família" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="max-w-full flex-shrink-0">
                        <div className="flex items-center justify-between h-screen bg-[#DAF1FF] p-5 text-black">
                                <div className="text-center mt-20">

                                    <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">VIVA UMA EXPERIÊNCIA UNICA!</p>
                                    <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Dedique seu tempo e talento para fazer a diferença na vida de quem precisa.</p>
                                    <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>Seja um Voluntário</button></a>
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358] mt-5">E Faça a Diferença</p>
                                </div>
                                <img className="" src={maosLevantadas} alt="" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="min-w-full flex-shrink-0">
                        <div className="flex items-center justify-between h-screen bg-[#DAF1FF] p-5 text-black">
                                <div className="text-center mt-20 p-10">

                                    <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">CUPONS QUE FAZEM BEM!</p>
                                    <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Doe e comece a acumular pontos, ganhe tickets e vauchers</p>
                                    <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>Ganhe Pontos</button></a>
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358] mt-5">E Economize!</p>
                                </div>
                            <img className="h-screen pt-52" src={Cupons} alt="Bolsa e moedas de cupons" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="min-w-full flex-shrink-0">
                        <div className="flex items-center justify-between h-screen bg-[#DAF1FF] p-5 text-black">
                            <div className="text-center mt-20 p-10">

                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">DOE E FAÇA A DIFERENÇA</p>
                                <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Cadastra sua ONG na <strong className="text-[#004358]">IMPACTO</strong> e tenha acesso a oportunidades de colaboaração.</p>
                                <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>Una-se a IMPACTO</button></a>
                            </div>
                            <img className="h-screen pt-52" src={pessoasSolidarias} alt="" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="min-w-full flex-shrink-0">
                        <div className="flex items-center justify-between h-screen bg-[#DAF1FF] p-5 text-black">
                                <div className="text-center mt-20 p-10">
                                    <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />

                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">SIGA-NOS E FIQUE POR DENTRO!</p>
                                    <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Siga a <strong className="text-[#004358]">IMPACTO</strong> nas redes sociais e acompanhe nossas novidades e oportunidades de se envolver.</p>
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358] mt-10">#UnindoCausasTransformandoVidas</p>

                                    <div className="flex max-w-[60%] mx-auto pt-32 items-center justify-between">
                                        <a href="https://www.linkedin.com/company/impactoinspira/" target="_blank" className="flex"><Linkedin /><p>Linkedin</p></a>
                                        <a href="https://www.facebook.com/profile.php?id=61560001469951" target="_blank" className="flex"><Facebook /><p>Facebook</p></a>
                                        <a href="https://www.instagram.com/impactoinspira?igsh=OWl4ZHc1dTV2NDd5" target="_blank" className="flex"><Instagram /><p>Instagram</p></a>
                                    </div>
                                </div>
                            <img className="h-screen pr-10 pt-52" src={ceInstagram} alt="" />
                        </div>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer">
                </CarouselPrevious>
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer">
                </CarouselNext>
            </Carousel>
        </>
    );
};
export default Destaques;