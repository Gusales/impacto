import BoasVindas from "@/components/boasVindas"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

export function Home(){
  document.title = "Impacto"
  return(
    <>
      <Header />
      <BoasVindas />
      <div>Conteudo</div> {/*Remover isso aqui*/}
      <Footer />
    </>
   
  )
}