import { Header } from "@/components/Header/Header";
import { Section } from "@/components/Section";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Section title="Sobre nós">
                <h2 className="text-justify md:text-base sm:text-sm">O grupo <span className="font-bold">Febre do Rato</span> é uma empresa inovadora que se destaca no cenário do setor elétrico, concentrando-se na geração, transmissão e distribuição de energia com um firme compromisso com a sustentabilidade e soluções tecnológicas de ponta. Somos uma organização que acredita no poder da energia para impulsionar o progresso e, ao mesmo tempo, se empenha em proteger o meio ambiente.</h2>
                <h1 className="text-2xl mt-6 font-bold text-emerald-600 mb-4">O conglomerado</h1>
                <ul className=" list-disc ml-10 text-gray-800 text-md font-semibold">
                    <li>
                        <Link href="/solucoes/">Febre do Rato Serviços Elétricos</Link>
                        <p className="font-normal mb-4 text-justify">Nossa empresa-mãe, a Febre do Rato Serviços Elétricos, é o epicentro da nossa atuação. Aqui, dedicamos nossos esforços para fornecer serviços de alta qualidade que abrangem toda a cadeia de valor elétrico, desde a geração até a distribuição. Investimos em tecnologia de ponta e práticas sustentáveis para garantir que nossa energia seja confiável e ecologicamente responsável.</p>
                    </li>
                    <li><Link href="/solucoes/">Febre do Rato Refrigeração</Link>
                        <p className="font-normal mb-4 text-justify">
                            Em sintonia com nosso compromisso com a sustentabilidade, a Febre do Rato Refrigeração desenvolve soluções inovadoras de refrigeração industrial, garantindo a eficiência energética e a redução de impactos ambientais. Nossos sistemas de refrigeração estão alinhados com os mais altos padrões de ecoeficiência.
                        </p>
                    </li>
                    <li><Link href="/solucoes/">Febre do Rato Solar e Eólica</Link>
                        <p className="font-normal mb-4 text-justify">
                            Com um olhar voltado para o futuro, a Febre do Rato Solar e a Febre do Rato Eólica lideram o caminho na produção de energia limpa e renovável. Nossos projetos solares e eólicos aproveitam os recursos naturais de maneira responsável, contribuindo para a redução das emissões de carbono e promovendo um ambiente mais limpo.
                        </p>
                    </li>
                    <li><Link href="/solucoes/"></Link>Febre do Rato Termoelétrica
                        <p className="font-normal mb-4 text-justify">
                            A Febre do Rato Termoelétrica é a vanguarda da geração de energia termelétrica eficiente. Utilizamos tecnologias avançadas para maximizar a eficiência e minimizar os impactos ambientais em nossas operações, mantendo um compromisso inabalável com a responsabilidade ambiental.
                        </p>
                    </li>
                    <li><Link href="/solucoes/">Febre do Rato Transmissão e Febre do Rato Engenharia</Link>
                        <p className="font-normal mb-4 text-justify">
                            A Febre do Rato Transmissão é responsável pela distribuição confiável e eficaz de energia para comunidades e indústrias. Trabalhamos em conjunto com a Febre do Rato Engenharia para projetar e implementar infraestruturas de transmissão seguras e sustentáveis, garantindo o fornecimento contínuo de energia.
                        </p>
                    </li>
                    <li><Link href="/solucoes/">Febre do Rato Água e Esgoto</Link>
                        <p className="font-normal mb-4 text-justify">
                            Não limitamos nossa atuação apenas ao setor elétrico. A Febre do Rato Água e Esgoto se dedica à gestão responsável dos recursos hídricos, desenvolvendo soluções para fornecer água limpa e sistemas eficientes de tratamento de esgoto, contribuindo assim para a preservação dos ecossistemas aquáticos.
                        </p>
                    </li>
                </ul>
                <h1 className="text-justify md:text-base sm:text-sm mt-6">Somos uma força motriz que busca transformar o cenário energético, priorizando a sustentabilidade e a tecnologia. Estamos comprometidos em fornecer soluções inovadoras e sustentáveis para enfrentar os desafios do mundo moderno, visando um futuro mais brilhante e ecológico para todos.</h1>

            </Section>

        </>
    )
}