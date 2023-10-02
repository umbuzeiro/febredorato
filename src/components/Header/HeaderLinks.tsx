import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { PhoneCallIcon, Globe2Icon, UsersIcon, FolderIcon } from "lucide-react";

export function HeaderLinks() {

    return <>
        <div className="flex flex-wrap p-2 flex-row sm:space-x-2 md:space-x-2 lg:space-y-0 lg:space-x-6 grow place-content-center hover:text-b text-sm">

            <HeaderLink Icon={FolderIcon} text="Quem somos" path="/about" />
            <HeaderLink Icon={UsersIcon} text="Produtos e soluções" path="/" links={[
                { "href": "/solutions/", "label": "Serviços Elétricos" },
                { "href": "/solutions/", "label": "Refrigeração" },
                { "href": "/solutions/", "label": "Solar" },
                { "href": "/solutions/", "label": "Eólica" },
                { "href": "/solutions/", "label": "Termoelétrica" },
                { "href": "/solutions/", "label": "Transmissão" },
                { "href": "/solutions/", "label": "Engenharia" },
                { "href": "/solutions/", "label": "Água e esgoto" }
            ]} />
            <HeaderLink Icon={Globe2Icon} text="Inovação" path="/" />
            <HeaderLink Icon={PhoneCallIcon} text="Fale conosco" path="/" />

            <HeaderLink Icon={UsersIcon} text="Trabalhe conosco" path="/" links={[
                { "href": "/solutions/", "label": "Nossa política" },
                { "href": "/solutions/", "label": "Ver oportunidades" }
            ]} />

        </div>


    </>
}