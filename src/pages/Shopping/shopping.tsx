import { Header } from "@/components/components-impacto/header/header";

import { ChevronRight } from "lucide-react";
import Footer from "@/components/components-impacto/footer";
import { Recompensa } from "@/pages/Shopping/Components/recompensa";
import { Hero } from "./Components/hero";

export function ShoppingPage(){
  document.title = "Resgate seus pontos || Impacto"

  return (
    <div className="absolute inset-0 flex flex-col items-center">
      <Header />
      <div className="mt-[50%] w-[80%] mb-6 sm:mt-[12%]">
        <h1 className="text-2xl font-medium">Impacto Points</h1>

        <div className="flex flex-col items-center lg:grid grid-cols-2 lg:space-x-4">
          <Hero buttonText="Confira" content="Aumete seus pontos fazendo doações e trabalhos voluntários!" title={`Olá${` Gustavo`}`} />
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
            <Recompensa />
            <Recompensa />
            <Recompensa />
          </section>
        </section>
      </div>
      <Footer />
    </div>
  )
}