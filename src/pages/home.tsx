import Destaques from "@/components/destaques"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

export function Home(){
  document.title = "Impacto"
  return(
    <>
      <Header />
      <Destaques />
      <div>Conteudo</div> {/*Remover isso aqui*/}
      <Footer />
    </>
   
  )
}