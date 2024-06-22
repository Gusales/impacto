import Facebook from "@/assets/images-footer/facebook.svg";
import Instagram from "@/assets/images-footer/inconInstagram.svg";
import Linkedin from "@/assets/images-footer/iconLinkedin.svg";


function Footer() {
    return (
        <>
            <footer className="bottom-0 w-full bg-gradient-to-r from-[#DAF1FF] via-[#8CBAD9] to-[#4A829C] h-48">
                <div className="flex items-center justify-center p-5">
                    <a className="p-2" href="https://www.facebook.com/profile.php?id=61560001469951" target="_blank"><img src={ Facebook } alt="Icone do Facebook" /></a>
                    <a className="p-2" href="https://www.instagram.com/impactoinspira?igsh=OWl4ZHc1dTV2NDd5" target="_blank"><img src={ Instagram } alt="Icone do Instagram" /></a>
                    <a className="p-2" href="https://www.linkedin.com/company/impactoinspira/" target="_blank"><img src={ Linkedin } alt="Icone do Linkedin" /></a>
                </div>
                    <p className='text-center m-auto p-5 text-lg text-[#004358] font-medium'>© 2024 Impacto</p>
            </footer>
        </>
    )
};
export default Footer;