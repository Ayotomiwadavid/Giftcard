import React from 'react'
import Shoppingcart from '../component/Shoppingcart'
import Ordersummary from '../component/Ordersummary'
import Header from '../component/Header'

const Productdetails = () => {
    return (
        <main>
            <Header />
            <section className='flex w-full px-6 py-10 items-center justify-center'>
                <Shoppingcart />
                <Ordersummary />
            </section>
        </main>
    )
}


export default Productdetails
