import { Header } from "@/components/components-impacto/header/header"
import Footer from "@/components/components-impacto/footer"

import EquipeImpacto from '@/assets/images-impacto/equipe-impacto.jpeg'
import Logo from '@/assets/images-impacto/Logo.svg'
import Visao from '@/assets/images-sobrenos/nossa-visao.jpg'

import { Content } from "@/pages/Sobre/Components/content"

export function Sobre() {
    document.title = "Sobre nós da Impacto"
    return(
        <div className="absolute inset-0 flex flex-col items-center">
            <Header />
            <main className="w-4/5 mt-[40%] lg:mt-[175px] flex flex-col items-center gap-4 mb-10">
                <div className="text-center border-b-4 border-[#004AAD] w-fit mb-12">
                    <h1 className="text-3xl">Unindo Causas, Transformando Vidas!</h1>
                </div>

                <Content 
                    content="A Impacto surgiu com 7 pessoas que se conheceram no Instituto PROA, lugar onde é oferecido um curso de programação, esse curso consiste em realizar um projeto em grupo chamado Demoday onde você tem que fazer uma apresentação do mesmo. a partir disso surgiu a ideia da Impacto e vimos o quanto ONG’s e Instituições passam por bastante dificuldade. Por isso o que era um projeto se transformou em uma Startup pois sabemos que nos podemos transformar vidas e contribuir para uma sociedade melhor."
                    imgAlt="Imagem dos fundadores da Impacto, onde comemoram a formação do grupo, todos estão muito sorridentes na foto"
                    imgSrc={EquipeImpacto}
                    title="Como surgiu a Impacto?"
                />

                <Content
                    content="Nossa missão é ser a ponte entre o desejo de ajudar e a oportunidade de fazer a diferença. Na nossa plataforma, unimos corações generosos a causas transformadoras, oferecendo uma experiência única que permite às pessoas contribuir para um mundo melhor, seja mediante doações financeiras ou envolvimento voluntário."
                    title="Nossa missão"
                    imgAlt="Imagem da Logo da nossa plataforma, uma ponte, simbolizando a conexão entre doadores e organizações não governamentais"
                    imgSrc={Logo}
                    imgPosition="left"
                />

                <Content
                    title="Nossa visão"
                    content="Transformar o mundo em um lugar onde a generosidade é uma força poderosa e acessível a todos, conseguindo capacitar pessoas a se tornarem agentes da mudança."
                    imgSrc={Visao}
                    imgAlt="Imagem de um mundo sendo segurado por mãos, que está passando por transformações"
                />
            </main>

            <Footer />
        </div>
    )
}