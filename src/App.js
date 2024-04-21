import React, { useState } from 'react'
// import Header from './component/Header'
import Herosection from './component/Herosection'
import About from './component/About'
import Contactsection from './component/Contactsection'
import Productsection from './component/Productsection'
import Rating from './Newsletter'
import Footer from './component/Footer'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AppNavbar from './component/Navbar'

const App = () => {
  let [controllerVisibility, setControllerVisibility] = useState(false)
  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  }
  let handleControllerVisibility = () => {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight)
    if (pos > 100) {
      setControllerVisibility(true)
    } else {
      setControllerVisibility(false)
    }
  }
  window.onscroll = handleControllerVisibility;
  window.onload = handleControllerVisibility;
  return (
    <main className='bg-[#fff] scro' id='top'>
      <aside className={controllerVisibility ? 'fixed flex items-center justify-center h-[50px] w-[50px] rounded-full bg-[#1363DF] bottom-[20px] right-[10px] shadow-md z-10 p-1' : 'fixed hidden items-center justify-center h-[50px] w-[50px] rounded-full bg-[#1363DF] bottom-[20px] right-[10px] shadow-md z-10 p-1'} onClick={handleClick}>
        <div className='flex items-center justify-center h-full w-full rounded-full bg-white bottom-[20px] right-[10px] shadow-md z-10'>
          <ArrowUpwardIcon style={{ fontSize: '30', color: '#1363DF' }} />
        </div>
      </aside>
      <AppNavbar />
      <Herosection />
      <About />
      <Contactsection />
      <Productsection />
      <Rating />
      <Footer />
    </main>
  )
}

export default App
