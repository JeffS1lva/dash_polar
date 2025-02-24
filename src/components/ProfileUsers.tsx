import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown } from "lucide-react";

export function ProfileUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex  items-center gap-3 mobile:gap-1 outline-none  ">
        <div className="flex flex-col items-end ">
          <span className="text-sm font-medium text-white ">John Knox</span>
          <span className="text-xs text-muted-foreground">johnknox@users.com</span>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/jeffS1lva.png" className="size-13" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <ChevronDown className="size-4 text-muted-foreground cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer" >
          Sair
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" >
          Configuração
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
