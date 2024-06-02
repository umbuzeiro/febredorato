import Image from "next/image";
import Link from "next/link";


export function HeaderLogo(){

    return <>
        <Link href="/">
            <div className="m-4 ml-4 hover:animate-pulse max-h-20">
            <Image className="lg:ml-12 hover:scale-105 ease-in-out duration-300 md:p-2 opacity-0" 
            alt="Logomarca" width={100} height={200} src="/febre.png"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}/>
            </div>
        </Link>
    
     </>

}