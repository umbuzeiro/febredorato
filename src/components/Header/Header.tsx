'use client'
import Script from "next/script";
import { HeaderActions } from "./HeaderActions";
import { HeaderLinks } from "./HeaderLinks";
import { HeaderLogo } from "./HeaderLogo";


export function Header(){
    

    return <>
    <section className="bg-white drop-shadow-sm flex items-center sm:flex-row md:flex-row lg:flex-row">
    <HeaderLogo/>
    <HeaderLinks/>
    <HeaderActions/>
    </section>
    </>
}