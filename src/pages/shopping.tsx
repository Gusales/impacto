import { Header } from "@/components/header";

import Sacolas from '@/assets/images/sacolas.png'
import Placeholder from '@/assets/images/placeholder-card-example.png'

import { ChevronRight } from "lucide-react";
import Footer from "@/components/footer";

export function ShoppingPage(){
  document.title = "Resgate seus pontos || Impacto"

  return (
    <div className="absolute inset-0 flex flex-col items-center">
      <Header />
      <div className="w-[80%] mt-[20%]">
        <h1>Impacto Points</h1>

        <section className="">
          <div>
            <h2>Olá!</h2>
            <p>Aumete seus pontos fazendo doações e trabalhos voluntários!</p>
            <a href="">Confira</a>
          </div>
          <figure>
            <img src={Sacolas} alt="Troque pontos por cupons de desconto!" />
          </figure>
        </section>

        <h2>Troque seus pontos!</h2>

        <button>gift-cards</button>
        <button>cupons</button>

        <section>
          <div>
            <h3>Recompensas sugeridas</h3>

            <a href="">
              Ver todas as recompensas
              <ChevronRight />
            </a>
          </div>

          <section>
            <article>
              <figure>
                <img src={Placeholder} alt="Resgate placeholder" />
              </figure>

              <h4>Cartão presente XBOX</h4>

              <button>
                <p>Resgate por</p>
                <p>1.000</p>
                <p>pontos</p>
              </button>
            </article>

            <article>
              <figure>
                <img src={Placeholder} alt="Resgate placeholder" />
              </figure>

              <h4>Cartão presente XBOX</h4>

              <button>
                <p>Resgate por</p>
                <p>1.000</p>
                <p>pontos</p>
              </button>
            </article>

            <article>
              <figure>
                <img src={Placeholder} alt="Resgate placeholder" />
              </figure>

              <h4>Cartão presente XBOX</h4>

              <button>
                <p>Resgate por</p>
                <p>1.000</p>
                <p>pontos</p>
              </button>
            </article>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  )
}