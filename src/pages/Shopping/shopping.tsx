import { ChevronRight } from "lucide-react";
import { Recompensa } from "@/pages/Shopping/Components/recompensa";
import { Hero } from "./Components/hero";

import PlaceholderXbox from '@/assets/images-shopping/placeholder-card-example.png'
import PlaceholderIfood from '@/assets/images-shopping/placegolder-ifood.png'
import PlaceholderMcDonalds from '@/assets/images-shopping/mcdonalds-brazil.webp'

const vounchers = [
  {
    id: 1,
    image: PlaceholderXbox,
    nome: "Cartão Presente XBOX R$ 25,00",
    price: 25000
  },
  {
    id: 2,
    image: PlaceholderIfood,
    nome: "Cupom Desconto iFood R$ 20,00",
    price: 20000
  },
  {
    id: 3,
    image: PlaceholderMcDonalds,
    nome: "Cupom Desconto McDonald's R$ 25,00",
    price: 25000
  },
]

export function ShoppingPage(){
  document.title = "Resgate seus pontos || Impacto"

  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] mb-6">
        <h1 className="text-2xl font-semibold">
          Já fez uma doação hoje?
        </h1>
        <h2 className="text-lg font-medium">
          Queremos te recompensar por isso!
        </h2>

        <div className="flex flex-col items-center lg:grid grid-cols-2 lg:space-x-4">
          <Hero buttonText="Confira" content="Aumete seus pontos fazendo doações e trabalhos voluntários!" title={`Olá${``}`} />
          <Hero buttonText="Convidar" content="Convite um amigo para doar em qualquer ong e ganhe 10 pontos!" title="Convide e ganhe!" />
        </div>
      
        <h2 className="mt-8 text-2xl font-medium">Troque seus pontos!</h2>

        <div className="flex gap-4 mt-5">
          <button className="bg-[#004AAD] text-white py-1 w-[100px] text-sm hover:opacity-85 transition-all rounded-full">gift-cards</button>
          <button className="bg-[#004AAD] text-white py-1 w-[100px] text-sm hover:opacity-85 transition-all rounded-full">cupons</button>
        </div>

        <section className="mt-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-0 gap-2 justify-between">
            <h3 className="text-2xl font-medium">Recompensas sugeridas</h3>

            <a href="" className="flex items-center gap-1 text-[#15406B] font-bold hover:underline hover:underline-offset-2">
              Ver todas as recompensas
              <ChevronRight />
            </a>
          </div>

          <section className="flex justify-between items-center gap-6 w-full flex-wrap">
            {
              vounchers.map(item => (
                <Recompensa image={item.image} nome={item.nome} price={item.price} />
              ))
            }
          </section>
        </section>
      </div>
    </div>
  )
}