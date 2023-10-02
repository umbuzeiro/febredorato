import { Sector } from "./Sector";

export function Sectors() {
    return (
        <>
            <section className="m-10 grid sm:grid-cols-1 md:grid-cols-4 gap-8">
                
            <Sector title="Serviços Elétricos" img="/areas/tecnico.webp"/>
            <Sector title="Refrigeração" img="/areas/ac-1.webp"/>

                <Sector title="Solar" img="/areas/painel-solar.webp"/>
                <Sector title="Eólica" img="/areas/eolica.webp"/>
                <Sector title="Termoelétrica" img="/areas/termo.webp"/>
                <Sector title="Transmissão" img="/areas/lt-2.webp"/>
                <Sector title="Engenharia" img="/areas/subestacao.webp"/>
                <Sector title="Água e esgoto" img="/areas/ete.webp"/>
            </section>
        </>
    )
}