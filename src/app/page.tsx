'use client'
import { Banners } from '@/components/Banner/Banners'
import { Header } from '@/components/Header/Header'
import { Sectors } from '@/components/List/Sectors'
import { Section } from '@/components/Section'
import { Menu } from '@headlessui/react'
// init Swiper:


export default function Home() {


  return (
    <>

      <Header />
      
      <Section title="Produtos e soluções">
        <Sectors />
      </Section>

      <Banners />
    </>
  )
}
