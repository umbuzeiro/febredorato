import Link from "next/link";

export function FooterLinks() {
    return (
        <>
            <section className="bg-emerald-800 drop-shadow-md mt-10 pt-20 pb-10 grid md:grid-cols-4 sm:grid-cols-1 gap-2 place-items-center items-start md:text-lg sm:text-sm">

                <ul className=" list-disc text-gray-100 sm:w-1/3 md:w-auto">
                    <h1 className="font-bold -ml-8 mb-2">Sobre nós</h1>
                    <li><Link href="/about/">Quem somos</Link></li>
                    <li><Link href="/about/">Nossa missão</Link></li>
                </ul>
                <ul className=" list-disc text-gray-100 sm:w-1/3 md:w-auto">
                    <h1 className="font-bold -ml-8 mb-2">Produtos e soluções</h1>
                    <li><Link href="/about/">Serviços elétricos</Link></li>
                    <li><Link href="/">Refrigeração</Link></li>
                    <li><Link href="/">Solar</Link></li>
                    <li><Link href="/">Eólica</Link></li>
                    <li><Link href="/">Termoelétrica</Link></li>
                    <li><Link href="/">Transmissão</Link></li>
                    <li><Link href="/">Engenharia</Link></li>
                    <li><Link href="/">Água e esgoto</Link></li>

                </ul><ul className=" list-disc text-gray-100 sm:w-1/3 md:w-auto">
                    <h1 className="font-bold -ml-8 mb-2">Trabalhe conosco</h1>
                    <li><Link href="/about/">Oportunidades</Link></li>
                    <li><Link href="/">Nossa política</Link></li>
                </ul>

                <ul className=" list-disc text-gray-100 sm:w-1/3 md:w-auto">
                    <h1 className="font-bold -ml-8 mb-2">Fale conosco</h1>
                    <li><Link href="/">Atendimento ao cliente</Link></li>
                    <li><Link href="/">Redes sociais</Link></li>
                </ul>

            </section>
        </>
    )
}