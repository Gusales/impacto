interface ParceiroProps {
  nome: string
  cover: string
  coverAlt: string
}

export function Parceiro({ cover, coverAlt, nome }: ParceiroProps){
  return(
    <article className="flex flex-col items-center">
      <div className="overflow-hidden rounded-full">
        <img src={cover} alt={coverAlt} className="w-48 rounded-full hover:scale-105 transition-all" />
      </div>
      <h4 className="text-xl font-semibold text-[#004358] mt-4">{nome}</h4>
      <a href="" target="_blank" className="hover:underline hover:underline-offset-2 w-fit block">Saiba mais</a>
    </article>
  )
}