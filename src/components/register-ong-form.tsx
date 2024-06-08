import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function RegisterOngForm(){
  return(
    <form action="">
      <div>
        <Label htmlFor="name">Nome:</Label>
        <Input id="name" placeholder="Digite seu nome" />
      </div>
      <div>
        <Label htmlFor="name">Nome:</Label>
        <Input id="name" placeholder="Digite seu nome" />
      </div>
      <div>
        <Label htmlFor="name">Nome:</Label>
        <Input id="name" placeholder="Digite seu nome" />
      </div>
    </form>
  )
}