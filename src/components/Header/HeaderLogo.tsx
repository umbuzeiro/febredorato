import Image from "next/image";
import Link from "next/link";


export function HeaderLogo(){

    return <>
        <Link href="/">
            <div className="m-4 ml-4 hover:animate-pulse">
            <Image className="lg:ml-12 hover:scale-105 ease-in-out duration-300 md:p-2" alt="Logomarca" width={100} height={200} src="/febre.png"/>
            </div>
        </Link>
    
     </>

}