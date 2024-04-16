import React from 'react'
import Header from './component/Header'
import Herosection from './component/Herosection'
import About from './component/About'
import Contactsection from './component/Contactsection'
import Productsection from './component/Productsection'
import Rating from './Rating'
import Testimonial from './component/Testimonial'
import Footer from './component/Footer'

const App = () => {
  return (
    <main className='bg-[#fff]'>
     <Header />
     <Herosection />
     <About />
     <Contactsection />
     <Productsection />
     <Testimonial />
     <Rating />
     <Footer />
    </main>
  )
}

export default App
