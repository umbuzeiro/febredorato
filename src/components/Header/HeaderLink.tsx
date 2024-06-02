import Link from "next/link";
import { Url, UrlObject } from "url";
import { ChevronDown, CurlyBraces, LucideIcon } from "lucide-react";
import { Menu } from '@headlessui/react'

interface HeaderLinkProps {
    text: string,
    Icon: LucideIcon,
    path: string,
    arrow?: boolean,
    links?: Link[],
}

interface Link {
    href: string,
    label: string
}
export function HeaderLink({ text, path, arrow = false, Icon, links }: HeaderLinkProps) {


    return <>
        <div>
            {links ?
                <Menu>
                    <Menu.Button><p className="transition hover:text-b"><Icon className="sm:block md:block lg:hidden text-g4" /><span className="sm:hidden md:hiddden lg:flex">{links ? <ChevronDown className="mr-1" size={20} /> : null}<span>{text}</span></span></p></Menu.Button>



                    <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {links.map((link) =>
                            <Menu.Item key={link.href}>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-blue-500'}`}
                                        href="/account-settings"
                                    >
                                        <Link href={`${link.href}`} className="block px-4 py-2 hover:bg-emerald-200">{link.label}</Link>


                                    </a>
                                )}
                            </Menu.Item>
                        )}


                    </Menu.Items>


                </Menu>
                : <p className="transition hover:text-b"><Link href={path}><Icon className="sm:block md:block lg:hidden text-g4" /><span className="sm:hidden md:hiddden lg:flex"><span>{text}</span></span></Link></p>}
        </div>
    </>
}