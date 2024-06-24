import { Header } from "@/components/components-impacto/header/header"
import styles from './style.module.css'
import Footer from "@/components/components-impacto/footer"

import EquipeImpacto from '@/assets/images-impacto/equipe-impacto.jpeg'
import Logo from '@/assets/images-impacto/Logo.svg'
import Visao from '@/assets/images-sobrenos/nossa-visao.jpg'

import { Content } from "@/pages/Sobre/Components/content"
import { Impactante } from "./Components/impactante"

// Imagem dos impactantes
import Celina from './assets/images/impactantes/celina.png'
import Fabio from './assets/images/impactantes/fabio.png'
import Gabriel from './assets/images/impactantes/gabriel.png'
import Gustavo from './assets/images/impactantes/gustavo.png'
import Helen from './assets/images/impactantes/hellen.png'
import Kaua from './assets/images/impactantes/kaua.png'
import Lucas from './assets/images/impactantes/lucas.png'
const impactantes = [
    {
      nome: "Celina Wendy",
      image: Celina,
      cargo: "Front end",
      github: "https://github.com/Celina22w",
      linkedin: "https://www.linkedin.com/in/celina-lozano-981895282/"
    },
    {
      nome: "Fabio Henrique",
      image: Fabio,
      cargo: "Back end",
      github: "https://github.com/FH-Silva",
      linkedin: "https://www.linkedin.com/in/fh-silva/"
    },
    {
      nome: "Gabriel Braz",
      image: Gabriel,
      cargo: "Scrum Master e Full Stack",
      github: "https://github.com/bieelbrz",
      linkedin: "https://www.linkedin.com/in/gabbraz/"
    },
    {
      nome: "Gustavo Sales",
      image: Gustavo,
      cargo: "Q.A e Full stack",
      github: "https://github.com/Gusales",
      linkedin: "https://www.linkedin.com/in/devgusales/"
    },
    {
      nome: "Helen Silva",
      image: Helen,
      cargo: "UX/UI, Financeira e Front end",
      github: "https://github.com/helenrocha19",
      linkedin: "https://www.linkedin.com/in/helen-silva-26b176231/"
    },
    {
      nome: "Kauã Dolores",
      image: Kaua,
      cargo: "Back end e DevOps",
      github: "https://github.com/Kauadoloress",
      linkedin: "https://www.linkedin.com/in/kaua-dolores-developer/"
    },
    {
      nome: "Lucas Tomaz",
      image: Lucas,
      cargo: "Product Owner, UX/UI e Front end",
      github: "https://github.com/LucasLTM",
      linkedin: "https://www.linkedin.com/in/lucas-tomaz-monteiro-331149270/"
    },
]

import PulseMais from './assets/images/parceiros/pulse_mais.jpg'
import Proa from './assets/images/parceiros/instituto_proa.jpg'
import { Parceiro } from "./Components/parceiro"

export function Sobre() {
    document.title = "Sobre nós da Impacto"
    return(
        <div className={`${styles.bgImage} bg-no-repeat bg-cover flex flex-col items-center`}>
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

                <section className="space-y-8 w-full mt-20">
                    <h2 className="text-center text-3xl font-semibold">Conheça a equipe Impacto!</h2>
                    <div className="grid grid-cols-2 gap-y-5">
                        {impactantes.map((impactante, index) => (
                            <Impactante 
                                atuacao={impactante.cargo} 
                                githubLink={impactante.github}
                                imgSrc={impactante.image}
                                linkedinLink={impactante.linkedin}
                                nome={impactante.nome}
                                position={index % 2 === 0 ? "left" : "right"}
                            />
                        ))}
                    </div>
                </section>

                <section className="flex flex-col items-center justify-center pt-16 gap-10 h-screen">
                  <h2 className="text-center text-2xl font-semibold">Um pouco sobre nossa identidade</h2>
                  <div className="grid grid-cols-3 gap-x-4 text-center">
                    <article className="flex flex-col items-center gap-5">
                      <div className="h-[120px] flex items-center justify-center hover:scale-110 transition-all">
                        <p className="text-4xl font-medium uppercase tracking-widest text-[#004358]">Impacto</p>
                      </div>

                      <h3 className="font-medium text-xl leading-relaxed text-[#004358]">Por que Impacto?</h3>
                      <p>Escolhemos Impacto pois nós queremos causar impacto em todo o mundo com a nossa plataforma, e também percebemos que essa palavra é usada cotidianamente quando se fala em transformar vidas</p>
                    </article>

                    <article className="flex flex-col items-center gap-5">
                      <figure className="h-[120px] flex items-center justify-center hover:scale-110 transition-all">
                        <img src={Logo} alt="Logo da Impacto" />
                      </figure>

                      <h3 className="font-medium text-xl leading-relaxed text-[#004358]">Uma ponte?</h3>
                      <p>Sim! Nossa logo simboliza uma ponte, pois nosso intuito é ser a ponte entre ONGs e doadores</p>
                    </article>

                    <article className="flex flex-col items-center gap-5">
                      <div className="h-[120px] flex items-center justify-center hover:scale-110 transition-all">
                        <p className="text-2xl font-medium uppercase tracking-widest text-[#004358]">Unindo Causas, transformando vidas!</p>
                      </div>

                      <h3 className="font-medium text-xl leading-relaxed text-[#004358]">Qual é a nossa frase impactante?</h3>
                      <p>Nosso slogan representa o que queremos trazer para o mundo, unir causas (ONGS e Doadores), transformando vidas(Ajudar quem estar ajudando)</p>
                    </article>
                  </div>
                </section>

                <section className="h-[90vh]">
                  <h2 className="text-center text-2xl font-semibold">Nossos parceiros</h2>
                  <p className="mt-4 text-center">Temos um profundo agradecimento aos nossos parceiros por se juntarem a nossa comunidade e conseguirem transformar vidas ao redor do mundo!</p>
                  <div className="flex items-center gap-10 justify-center mt-10">
                    <Parceiro cover={Proa} coverAlt="Logo do Instituto PROA" nome="Instituto PROA" />
                    <Parceiro cover={PulseMais} coverAlt="Logo da ONG Pulse Mais" nome="Pulse Mais" />
                  </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}