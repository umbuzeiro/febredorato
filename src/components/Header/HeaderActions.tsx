import { User, ShoppingCart } from 'lucide-react';

export function HeaderActions(){

    return <>
        <section className='flex text-g4 text-sm lg:space-x-6 sm:mr-2 lg:p-10 md:p-2 sm:p-3'>
        <User/>
        <ShoppingCart/>
        </section>    
    </>

}