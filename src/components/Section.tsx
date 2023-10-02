
export function Section({title, children}: {children: React.ReactNode, title : string}){
    return <>
        <section className="sm:m-5 lg:m-16">
        <h1 className='drop-shadow-sm sm:text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 py-3 '>{title}</h1>
            {children}
        </section>
    </>
}