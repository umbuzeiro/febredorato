import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { PhoneCallIcon, Globe2Icon, UsersIcon, FolderIcon} from "lucide-react";

export function HeaderLinks(){

    return <>
        <div className="flex flex-wrap p-2 flex-row sm:space-x-2 md:space-x-2 lg:space-y-0 lg:space-x-8 grow place-content-center hover:text-b text-sm">
        
        <HeaderLink Icon={FolderIcon} text="Catálogo" path="/catalogo"/>
        <HeaderLink Icon={UsersIcon} text="Colaboradores" path="/colaboradores"/>
        <HeaderLink Icon={Globe2Icon} text="Sustentabilidade" path="/sustentabilidade"/>
        <HeaderLink Icon={PhoneCallIcon} text="Contato" path="/sac"/>
        
        </div>

        
    </>
}