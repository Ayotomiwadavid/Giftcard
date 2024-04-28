import React from 'react'
import AppNavbar from '../component/Navbar'
import Productdetailscard from '../component/Productdetailscard'
import Ordersummary from '../component/Ordersummary'

const Productdetails = () => {
    return (
        <main>
            <AppNavbar />
            <section className='flex w-full px-6 py-10 items-center justify-center'>
                <Productdetailscard />
                <Ordersummary />
            </section>
        </main>
    )
}


export default Productdetails
