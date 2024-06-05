import BoasVindas from "@/components/boasVindas"
import { Header } from "@/components/header"

export function Home(){
  document.title = "Impacto"
  return(
    <>
      <Header />
      <BoasVindas />
    </>
   
  )
}