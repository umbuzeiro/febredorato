import Link from "next/link";
import { Url, UrlObject } from "url";
import { ChevronDown, LucideIcon } from "lucide-react";

interface HeaderLinkProps {
    text: string,
    Icon: LucideIcon,
    path: string,
    arrow?: boolean,
}


export function HeaderLink({text, path, arrow = false, Icon} : HeaderLinkProps){
    return <>
        <div>
        <p className="transition hover:text-b"><Link href={path}><Icon className="sm:block md:block lg:hidden text-g4"/><span className="sm:hidden md:hiddden lg:block">{text}</span></Link></p>
        
        {/* <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
        </ul> 
</div>*/}
    <script type="text/javascript">
        const pica = document.
    </script>
        </div>
    </>
}