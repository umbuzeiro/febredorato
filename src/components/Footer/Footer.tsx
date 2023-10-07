import Link from "next/link";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
    return (
        <>
            <FooterLinks/>
            <section className="bg-emerald-600 text-center text-gray-100 text-sm p-2">
                <p>Grupo Febre do Rato - Todo o material contido neste website é pura sátira.</p>
            </section>
        </>
    )
}