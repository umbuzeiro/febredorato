import Image from "next/image";
import Link from "next/link";


export function HeaderLogo(){

    return <>
        <Link href="/">
            <Image className="lg:ml-3 hover:scale-105 ease-in-out duration-300" alt="Logomarca" width={180} height={400} src="./neogessos.svg"/>
        </Link>
    
     </>

}