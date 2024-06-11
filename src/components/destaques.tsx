import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Facebook } from "lucide-react";
import WomanDog from "@/assets/womanDog-destaques.svg"
import Cadeirante from "@/assets/cadeirante-destaques.svg"
import Cupons from "@/assets/cupons.svg"
import Criancas from "@/assets/criancas-destaques.svg"
import CeInstagram from "@/assets/celInstagram.svg"
import Ponte from "@/assets/ponte.svg"

function Destaques() {
    return (
        <>
            <Carousel className="relative w-full mx-auto overflow-hidden shadow-[0px_4px_10px_0px_#807e7e]"
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]} 
            >
                <CarouselContent className="flex transition-transform">
                    <CarouselItem className="min-w-full flex-shrink-0">
                        <div className="flex items-center justify-between h-screen bg-gradient-to-b from-[#DAF1FF] to-[#7BB0C1] p-5 text-black">
                            <div className="text-center mt-20 p-10">

                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">DOE E FAÇA A DIFERENÇA</p>
                                <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Quer fazer a diferença, mas não conhece nenhuma ONG?</p>
                                <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>ONGs Parceiras</button></a>
                            </div>
                            <img className="h-screen pt-52" src={WomanDog} alt="Uma mulher segurando um cachorro" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="max-w-full flex-shrink-0">
                        <div className="flex relative items-center h-screen bg-gradient-to-b from-[#DAF1FF] to-[#7BB0C1] p-5 text-black">
                            <div className="flex mt-36">

                                <div className="text-center">
                                    <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">VIVA UMA EXPERIÊNCIA UNICA!</p>
                                    <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Dedique seu tempo e talento para fazer a diferença na vida de quem precisa.</p>
                                    <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>Seja um Voluntário</button></a>
                                    <p className="text-[24px] font-semibold leading-[35px] text-[#004358] mt-5">E Faça a Diferença</p>
                                </div>
                            </div>
                                <img className="m-auto mt-72" src={Cadeirante} alt="Um voluntário e senhor cadeirante" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="max-w-full flex-shrink-0">
                        <div className="flex relative items-center justify-between h-screen bg-gradient-to-b from-[#DAF1FF] to-[#7BB0C1] p-5 text-black">
                            <div className="mt-20 p-10 absolute inset-0 flex flex-col items-center justify-center max-w-[50%]">

                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">CUPONS QUE FAZEM BEM!</p>
                                <p className="max-w-[60%] text-center text-[20px] mx-auto mt-[44px] text-[#061314] mb-[88px]">Doe e comece a acumular pontos, ganhe tickets e vauchers</p>
                                <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer'>Ganhe Pontos</button></a>
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358] mt-5">E Economize!</p>
                            </div>
                            <img className="w-full h-auto" src={Cupons} alt="Ilustração dos pontos da impacto" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="max-w-full flex-shrink-0">
                        <div className="flex items-center justify-between h-screen bg-gradient-to-b from-[#DAF1FF] to-[#7BB0C1] p-5 text-black">
                            <div className="text-center mt-20 p-10">

                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">DOE E FAÇA A DIFERENÇA</p>
                                <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Cadastre sua ONG na <strong className="text-[#004358]">IMPACTO</strong> e tenha acesso a oportunidades de colaboaração.</p>
                                <a href="#"><button className='bg-[#004AAD] text-white w-[250px] h-[43px] rounded-[5px] text-[24px] cursor-pointer mt-[88px]'>Una-se a IMPACTO</button></a>
                            </div>
                            <img className="h-screen pt-52 mr-10" src={Criancas} alt="Crianças da Tanzânia" />
                        </div>
                    </CarouselItem>

                    <CarouselItem className="max-w-full flex-shrink-0">
                        <div className="flex items-center justify-between h-screen bg-gradient-to-b from-[#DAF1FF] via-[#cfeafa] to-[#7BB0C1] p-5 text-black">
                            <div className="text-center mt-20 p-10">
                                <img src={Ponte} alt="Logo da Impacto" title="Impacto" className="mx-auto" />

                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358]">SIGA-NOS E FIQUE POR DENTRO!</p>
                                <p className="max-w-[60%] text-[20px] mx-auto mt-[44px] text-[#061314]">Siga a <strong className="text-[#004358]">IMPACTO</strong> nas redes sociais e acompanhe nossas novidades e oportunidades de se envolver.</p>
                                <p className="text-[24px] font-semibold leading-[35px] text-[#004358] mt-10">#UnindoCausasTransformandoVidas</p>

                                <div className="flex max-w-[60%] mx-auto pt-32 items-center justify-between">
                                    <a href="https://www.linkedin.com/company/impactoinspira/" target="_blank" className="flex"><Linkedin /><p className="ml-1">Linkedin</p></a>
                                    <a href="https://www.facebook.com/profile.php?id=61560001469951" target="_blank" className="flex"><Facebook /><p>Facebook</p></a>
                                    <a href="https://www.instagram.com/impactoinspira?igsh=OWl4ZHc1dTV2NDd5" target="_blank" className="flex"><Instagram /><p className="ml-1">Instagram</p></a>
                                </div>
                            </div>
                            <img className="h-screen pr-10 pt-52" src={CeInstagram} alt="Instagram da Impacto" />
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