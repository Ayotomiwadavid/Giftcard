import React from 'react'
import AppNavbar from '../component/Navbar'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from 'react-scroll-to-top'
import Herosection from '../component/Herosection'
import About from '../component/About'
import Contactsection from '../component/Contactsection'
import Productsection from '../component/Productsection'
import { Footer, Rating } from 'flowbite-react'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <>
            <ToastContainer />
            <div className='fixed bottom-[20px] right-[10px] w-[50px] h-[50px] rounded-full'>
                <ScrollToTop smooth
                    viewBox="0 0 32 32"
                    svgPath='m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z'
                    color='white'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#1363DF',
                        height: '50px',
                        width: '50px',
                        borderRadius: '50%',
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    }} />
            </div>
            <AppNavbar />
            <Herosection />
            <About />
            <Contactsection />
            <Productsection />
            <Rating />
            <Footer />
        </>
    )
}

export default Home
