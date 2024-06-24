import Footer from "@/components/components-impacto/footer";
import { Header } from "@/components/components-impacto/header/header";

import DoeParaTodos from '@/assets/imagens-doacoes/doe_para_todos.png'

import PulseMais from '../Sobre/assets/images/parceiros/pulse_mais.jpg'
import Proa from '../Sobre/assets/images/parceiros/instituto_proa.jpg'

import { Tag } from "./components/tag";
import { Ong } from "./components/ong";

const ongs = [
  {
    id: 1,
    nome: "Pulse mais",
    sobreOng: "🚀 Incluimos jovens de baixa renda no universo da tecnologia através de educação, mentoria e conexão com mercado",
    image: PulseMais
  },
  {
    id: 2,
    nome: "Instituto PROA",
    sobreOng: "Ajudamos jovens a conquistarem seus sonhos! 💙 oferecemos cursos gratuitos de preparo pro mercado de trabalho!",
    image: Proa
  }
]

export function Doacoes(){
  document.title = "Faça uma doação || Impacto"
  return(
    <div className="absolute inset-0 flex flex-col items-center">
      <Header />
      <main className="w-4/5 mt-[40%] lg:mt-[175px] pb-8">
         <h2 className="text-2xl font-medium">Atalhos rápidos</h2>

         <section className="grid grid-cols-2 gap-x-4 mt-8">
          <article className="bg-[#DAF1FF] p-4 rounded-2xl shadow-lg flex gap-4">
            <div className="flex flex-col justify-between gap-4">
              <h3 className="text-xl font-medium">Doe para todos!</h3>
              <p className="w-3/4 text-sm">Não tem nenhuma ONG em específico para doar? Por aqui sua doação será distribuído igualmente para todas as ONG’s cadastradas!</p>
              <button className="w-fit py-1  px-7 text-white bg-[#004AAD] font-medium hover:opacity-85 transition-all rounded">Doe aqui</button>
            </div>
            <figure>
              <img 
                src={DoeParaTodos} 
                alt="Imagem de uma pessoa branca, vestida com roupas sociais e sentada em uma cadeira que está segurando um coração azul" 
                className="h-full w-[200px]"  
              />
            </figure>
          </article>
          <article className="bg-[#DAF1FF] p-4 rounded-2xl shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-medium">Meus favoritos</h3>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-sm font-light w-3/4 text-center text-[#565656]">Você ainda não favoritou nenhuma ONG, que tal fazer isso agora?</p>
            </div>
          </article>
         </section>

         <section>
          <h1 className="text-2xl font-bold mt-6">Faça uma doação</h1>
          <p className="text-lg mt-1">Escolha alguém para impactar</p>

          <div className="mt-4">
            <h2 className="text-xl font-medium">Busque por causas:</h2>

            <div className="w-full flex justify-between mt-1 mb-8">
              <Tag>Crianças</Tag>
              <Tag>Animais</Tag>
              <Tag>Combate à fome</Tag>
              <Tag>Idosos</Tag>
              <Tag>Situação de rua</Tag>
              <Tag>Outros</Tag>
            </div>
          </div>

          <ul className="space-y-5">
            {
              ongs.map(ong => (
                <Ong idOng={ong.id} image={ong.image} nome={ong.nome} sobreOng={ong.sobreOng} key={String(ong.id)} />
              ))
            }
            {
              ongs.map(ong => (
                <Ong idOng={ong.id} image={ong.image} nome={ong.nome} sobreOng={ong.sobreOng} key={String(ong.id)} />
              ))
            }
          </ul>
            <div className="w-full flex items-center justify-center">
              <button className="mt-5 text-xl hover:underline hover:underline-offset-2">Veja mais</button>
            </div>
          
         </section>
      </main>
      <Footer />
    </div>
  )
}