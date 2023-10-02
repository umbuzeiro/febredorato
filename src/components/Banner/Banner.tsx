import Link from "next/link"

interface BannerProps {
    title?: string,
    desc?: string,
    url?: string,
    img?: string
}

export function Banner({ title, desc, url, img }: BannerProps) {
    return (
        <>
            <section style={{ backgroundImage: `url(${img})` }} className="bg-no-repeat bg-center bg-cover mx-5 m-10 rounded-[18px] ">
                <div className="z-0 rounded-[18px] bg-gradient-to-r from-emerald-950/50 to-emerald-700/10 drop-shadow-lg lg:h-[26rem] md:h-[30rem] sm:h-[28rem] min-h-full text-left flex flex-col items-start place-content-left place-content-between text-white">

                    <h1 className="md:mx-20 sm:mx-4 mt-20 sm:mt-10 sm:text-2xl md:text-3xl font-bold my-3">{title}</h1>
                    <h2 className="md:mx-20 sm:mx-4 sm:mt-10 sm:text-sm md:text-lg">{desc}</h2>
                    <Link className="md:mx-20 sm:mx-4 mb-10 sm:mt-10 sm:text-sm md:text-1xl font-bold my-3 px-5 bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-full" href={`${url}`}>Saiba mais</Link>

                </div>
            </section>
        </>
    )


}