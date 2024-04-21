import React from 'react'
import { Button, Navbar } from "flowbite-react";

const AppNavbar = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="#">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">checkr</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button 
                style={{
                    background: '#1363DF',
                    padding: '5px 10px',
                    margin: '0 10px'
                }}
                >Verify Card</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='bg-[#1363DF] mt-2'>
                <Navbar.Link href="#" class="block py-2 px-3 md:p-0 text-white rounded md:hover:bg-transparent hover:bg-white transition-all duration-700 hover:text-[#1363DF] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" class="block py-2 px-3 md:p-0 text-white rounded md:hover:bg-transparent hover:bg-white transition-all duration-700 hover:text-[#1363DF] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Navbar.Link>
                <Navbar.Link href="#" class="block py-2 px-3 md:p-0 text-white rounded md:hover:bg-transparent hover:bg-white transition-all duration-700 hover:text-[#1363DF] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Verify Card</Navbar.Link>
                <Navbar.Link href="#" class="block py-2 px-3 md:p-0 text-white rounded md:hover:bg-transparent hover:bg-white transition-all duration-700 hover:text-[#1363DF] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Buy Card</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavbar
