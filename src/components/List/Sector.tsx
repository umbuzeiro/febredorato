import Link from "next/link"

interface SectorProps{
    title?: string,
    img: string
}

export function Sector({title, img} : SectorProps) {

    return (
        <>
            <section style={{backgroundImage: `url(${img})`}} className="rounded-lg bg-no-repeat bg-center bg-cover hover:scale-105 transition ease-in-out duration-300">
                <Link href="/">
                <div className="bg-gradient-to-r from-emerald-950/30 to-emerald-700/10 drop-shadow-lg rounded-lg  sm:h-64 md:h-60 lg:h-80 min-h-full text-center flex items-end place-content-center ">
                    <p className=" drop-shadow-sm font-bold text-white sm:text-3xl md:text-lg lg:text-3xl p-4 mb-4">{title}</p>
                </div>
                </Link>
        
            </section>
        </>
    )
}