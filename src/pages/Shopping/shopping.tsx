import { Header } from "@/components/components-impacto/header/header";

import Sacolas from '@/assets/images-shopping/sacolas.png'

import { ChevronRight } from "lucide-react";
import Footer from "@/components/components-impacto/footer";
import { Recompensa } from "@/pages/Shopping/Components/recompensa";

export function ShoppingPage(){
  document.title = "Resgate seus pontos || Impacto"

  return (
    <div className="absolute inset-0 flex flex-col items-center">
      <Header />
      <div className="mt-[15%] w-[80%] mb-6">
        <h1 className="text-2xl font-medium">Impacto Points</h1>

        <section className="flex p-5 w-full justify-between bg-[#DAF1FFAD] rounded-xl shadow-md mt-8">
          <div className="flex flex-col justify-between">
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-2xl">Olá!</h2>
              <p className="sm:w-2/3">Aumete seus pontos fazendo doações e trabalhos voluntários!</p>
            </div>
            <a href="" className="p-2 w-2/5 bg-[#004AAD] text-white text-center text-xl rounded-md font-light hover:opacity-80 transition-all">Confira</a>
          </div>
          <figure>
            <img src={Sacolas} alt="Troque pontos por cupons de desconto!" />
          </figure>
        </section>

        <h2 className="mt-8 text-2xl font-medium">Troque seus pontos!</h2>

        <div className="flex gap-4 mt-5">
          <button className="bg-[#004AAD] text-white py-1 w-[100px] text-sm hover:opacity-85 transition-all rounded-full">gift-cards</button>
          <button className="bg-[#004AAD] text-white py-1 w-[100px] text-sm hover:opacity-85 transition-all rounded-full">cupons</button>
        </div>

        <section className="mt-8 space-y-5">
          <div className="flex items-center justify-between">
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