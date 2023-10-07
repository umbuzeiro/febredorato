'use client'
import { Banners } from '@/components/Banner/Banners'
import { Educational } from '@/components/Educational/Educational'
import { Header } from '@/components/Header/Header'
import { Sectors } from '@/components/List/Sectors'
import { Section } from '@/components/Section'
import { Menu } from '@headlessui/react'
// init Swiper:


export default function Home() {


  return (
    <>


      <Section title="Produtos e soluções">
        <Sectors />
      </Section>

      <h1 className='sm:ml-5 lg:ml-16 drop-shadow-sm sm:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 py-3 '>Práticas ESG</h1>
      <Banners />

      <Section title='Educacional'>
            <Educational/>
      </Section>

    </>
  )
}
