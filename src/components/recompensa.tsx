import Placeholder from '@/assets/images/placeholder-card-example.png'

interface RecompensaProps {}
export function Recompensa(){
  return(
    <article className="w-80 h-[450px] bg-[#DAF1FFAD] shadow-lg flex flex-col rounded-md overflow-hidden transition-all hover:scale-105">
      <figure>
        <img src={Placeholder} alt="Resgate placeholder" />
      </figure>

      <div className="flex-1 flex flex-col items-center justify-between pt-6 pb-4">
        <h4 className="text-2xl font-medium">Cartão presente XBOX</h4>

        <button className="text-xl hover:">
          <p>Resgate por</p>
          <p className="text-3xl text-[#004AAD]">1.000</p>
          <p>pontos</p>
        </button>
      </div>
    </article>
  )
}