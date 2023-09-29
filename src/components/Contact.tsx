import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ContactProps{
    Icon: LucideIcon,
    text: string,
    url: string
}

export function Contact({Icon, text, url}: ContactProps){

    return <>
        <div className="bg-white rounded sm:w-full lg:w-1/4 flex m-5 flex-row items-center p-2 place-content-center">
                <Icon/>
                <Link href={url}>
                <h2 className="py-3 p-5">{text}</h2>
                </Link>
            </div>        
        </>
}