import { EducationalElement } from "./EducationalElement";

export function Educational() {
    return (
        <>
            <section className="m-10 grid place-items-center sm:grid-cols-1 md:grid-cols-3 gap-8 ">
                
                <EducationalElement title="Centro de Ensino Febre do Rato" img="/img/alunos.jpg" />
                <EducationalElement title="Febre do Rato TV" img="/img/pc.jpg" />
                <EducationalElement title="Estágio" img="/img/estagio.jpg" />

            </section>
        </>
    )
}