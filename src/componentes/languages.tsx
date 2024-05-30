import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import BR from "@/assets/paises/br.svg"
import ES from "@/assets/paises/es.svg"
import US from "@/assets/paises/us.svg"

const languages = [
  {
    value: "pt",
    label: "Português",
    flag: BR,
  },
  {
    value: "en",
    label: "Inglês",
    flag: US,
  },
  {
    value: "es",
    label: "Espanhol",
    flag: ES,
  }
]

export function SelectLanguages() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("pt")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-0 hover:bg-transparent hover:underline"
        >
          {value
            ? (<div className="flex items-center gap-2">
            <img src={
              languages.find(item => item.value === value)?.flag
            } className="rounded-full object-cover h-[20px] w-[20px]"/>
            <p>{languages.find(item => item.value === value)?.label}</p>
          </div>)
            : (<div className="flex items-center gap-2">
              <img src={BR} className="rounded-full object-cover h-[20px] w-[20px]"/>
              <p>Português</p>
            </div>)
            }
          <ChevronDown className={`ml-2 h-4 w-4 shrink-0 opacity-50 ${open && "rotate-180"}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandList>
          <CommandGroup>
            {languages.map(item => (
              <CommandItem 
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(state => !state)
                }}
                className="gap-2"
                >
                  <img src={item.flag} className="rounded-full object-cover h-[20px] w-[20px]"/>
                  {item.label}
                  
                </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      </PopoverContent>
    </Popover>
  )
}
