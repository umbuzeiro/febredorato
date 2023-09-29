import { Section } from '@/components/Section'
import Image from 'next/image'

export default function Home() {
  return (
    <Section title="Febre do Rato">
      <h1>Website em construção</h1>

      <div className=' mt-10 p-5 ml-6 bg-white flex flex-col rounded-lg drop-shadow-sm'>
        <h2 className='font-semibold text-md'>Conheça o conglomerado:</h2>
        <ul className="list-disc ml-4">
          <li>Febre do Rato Serviços Elétricos</li>
          <li>Febre do Rato Energias Renováveis</li>
          <li>Febre do Rato Refrigeração</li>
          <li>Febre do Rato Transmissão</li>
          <li>Febre do Rato Termelétrica</li>
          <li>Febre do Rato Cursos</li>
          <li>Febre do Rato Engenharia</li>
          <li>Febre do Rato Participações</li>

        </ul>
      </div>

    </Section>
  )
}
