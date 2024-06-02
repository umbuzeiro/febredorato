import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface EducationalProps {
    title?: string,
    img: string
}


export function EducationalElement({ title, img }: EducationalProps) {
    return (
        <>
            <section className="rounded-lg bg-no-repeat bg-center bg-cover hover:scale-105 transition ease-in-out duration-300 z-0 w-full">

                <Link href="/">
                    <div className="bg-gradient-to-r from-emerald-500/50 to-emerald-700/50 drop-shadow-lg rounded-lg sm:h-64 md:h-60 lg:h-80 text-center flex items-end place-content-center ">
                    <Image className="rounded-lg transition-opacity opacity-0 duration-[2s]"
                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                src={img} 
                alt="a" 
                
                layout={'fill'} 
                objectFit={'cover'}/>
                        <p className=" drop-shadow-sm font-bold text-white sm:text-3xl md:text-lg lg:text-3xl p-4 mb-4">{title}</p>
                        
        {/* <p className="text-white absolute text-left w-full p-6"><ArrowUpRight size={32}/></p> */}
                    </div>
                </Link>

            </section>
        </>
    )
}