import { Sector } from "./Sector";

export function Sectors() {
    return (
        <>
            <section className="m-10 grid sm:grid-cols-1 md:grid-cols-4 gap-8">
                
            <Sector title="Serviços Elétricos" img="/areas/tecnico.jpg"/>
            <Sector title="Refrigeração" img="/areas/ac-1.jpg"/>

                <Sector title="Solar" img="/areas/painel-solar.jpg"/>
                <Sector title="Eólica" img="/areas/eolica.jpg"/>
                <Sector title="Termoelétrica" img="/areas/termo.jpg"/>
                <Sector title="Transmissão" img="/areas/lt-2.jpg"/>
                <Sector title="Engenharia" img="/areas/subestacao.jpg"/>
                <Sector title="Água e esgoto" img="/areas/ete.jpg"/>
            </section>
        </>
    )
}