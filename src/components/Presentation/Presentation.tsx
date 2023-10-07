export function Presentation(){
    return(
        <>
            <section className="relative flex items-center  
        justify-center h-60 overflow-hidden drop-shadow-md">
                
            <video autoPlay muted loop playsInline className="absolute z-10 w-auto  
            min-w-full min-h-full max-w-none"><source src="/bg.mp4" type="video/mp4"></source>
            </video>
   
            </section>
        
        </>
    )
}