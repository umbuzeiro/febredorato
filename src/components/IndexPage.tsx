import Link from "next/link";

export function IndexPage() {
    return (
        <>
            <section className='m-16 sm:max-w-full md:max-w-screen-md lg:max-w-screen-md'>

                <div className='lg:text-7xl sm:text-4xl py-10 tracking-tighter'>
                    <h1 >Olá, somos a</h1>
                    <h1 className='sm:text-5xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-g3 to-g4 py-3 '>Neogessos!</h1>
                </div>
                <div className='md:text-sm lg:text-xl'>
                    <p>Somos uma equipe apaixonada por transformar espaços em verdadeiras obras de arte.</p>         <p>Nossa jornada começou com um sonho: <span className='font-bold'>trazer beleza e sofisticação para cada ambiente</span>, que é exatamente o que fazemos todos os dias.</p>
                </div>
                <div className='text-base'>
                    <p>Confira as novidades no nosso <Link className="text-links underline underline-offset-auto" href={"https://instagram.com/neogessos"}>Instagram</Link>.</p>
                </div>
            </section>
        </>
    )
}