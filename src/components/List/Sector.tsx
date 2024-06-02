import Image from "next/image"
import Link from "next/link"

interface SectorProps{
    title?: string,
    img: string
}

export function Sector({title, img} : SectorProps) {

    return (
        // style={{backgroundImage: `url(${img})`}}
        <>
            <section className="rounded-lg bg-no-repeat bg-center bg-cover hover:scale-105 transition ease-in-out duration-300 z-0">
                
                <Link href="/">
                <div className="bg-gradient-to-r from-emerald-500/50 to-emerald-700/50 drop-shadow-lg rounded-lg  sm:h-64 md:h-60 lg:h-80 min-h-full text-center flex items-end place-content-center ">
                <Image className="rounded-lg transition-opacity opacity-0 duration-[0.5s]"
                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                src={img} 
                alt="a" 
                
                layout={'fill'} 
                objectFit={'cover'}/>
                    <p className=" drop-shadow-sm font-bold text-white sm:text-3xl md:text-lg lg:text-3xl p-4 mb-4">{title}</p>
                </div>
                </Link>
        
            </section>
        </>
    )
}