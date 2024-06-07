import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

function Footer() {
    return (
        <>
            <footer className="bottom-0 w-full bg-[#061314] text-white h-90">
                <div className="flex items-center justify-between">
                    <div className="p-5">
                        <p className="text-xl my-5">Impacto</p>
                        <a href="#" className="flex text-gray-400 text-base no-underline mb-6 hover:text-white">Missão, Visão e Valores</a>
                        <a href="#" className="flex text-gray-400 text-base no-underline mb-6 hover:text-white">Quem Somos</a>
                        <a href="#" className="flex text-gray-400 text-base no-underline mb-6 hover:text-white">Contato</a>
                    </div>

                    <div className="p-5">
                        <p className="text-xl my-5">Doação</p>
                        <a href="#" className="flex text-gray-400 text-base no-underline mb-6 hover:text-white">Importância da Doação</a>
                        <a href="#" className="flex text-gray-400 text-base no-underline mb-6 hover:text-white">Benefícios da Doação</a>
                        <a href="#" className="flex text-gray-400 text-base no-underline mb-6 hover:text-white">ONG'S Cadastradas</a>
                    </div>

                    <div className="p-5">
                        <p className="text-xl my-5">ONG</p>
                        <a href="#" className="flex text-gray-400 text-base no-underline mb-6 hover:text-white">Cadastrar Minha ONG</a>
                        <a href="#" className="flex text-gray-400 text-base no-underline mb-6 hover:text-white">Benefícios Oferecidos</a>
                    </div>
                </div>

                <div className="flex">
                    <p className='flex m-auto p-10 text-lg mt-12'>Siga A Impacto nas redes! - <a className="pl-2" href="https://www.instagram.com/impactoinspira?igsh=OWl4ZHc1dTV2NDd5" target="_blank"><Instagram /></a> <a className="pl-2" href="https://www.linkedin.com/company/impactoinspira/" target="_blank"><Linkedin /></a></p>
                </div>
            </footer>
        </>
    )
};
export default Footer;