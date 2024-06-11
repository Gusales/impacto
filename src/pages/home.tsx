import Destaques from "@/components/destaques"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import HomeContent from "@/components/home-content"

export function Home(){
  document.title = "Impacto"
  return(
    <>
      <Header />
      <Destaques />
      <HomeContent />
      <Footer />
    </>
   
  )
}