'use client'
import Script from "next/script";
import { HeaderActions } from "./HeaderActions";
import { HeaderLinks } from "./HeaderLinks";
import { HeaderLogo } from "./HeaderLogo";

export function Header() {


    return <>
        <section className="relative z-50 bg-white drop-shadow-sm flex items-center sm:flex-row md:flex-row lg:flex-row">
            <HeaderLogo />
            <div className="w-full flex flex-col place-items-center text-center">
                <div className="m-3 font-thin sm:text-xs/6 md:text-sm w-1/3 p-1 bg-emerald-100 sm:rounded-lg md:rounded-full">
                    <h1 className="text-gray-900">CAPITAL R$ 20,2 bi • 30.09.2023 •  0.32%<span className="text-green-500 ml-2">▲</span></h1>
                </div>
                <HeaderLinks />

            </div>
            <HeaderActions />
        </section>
    </>
}