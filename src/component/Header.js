import React from 'react'
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar fluid rounded class="bg-[#1363DF] border-gray-200 dark:bg-gray-900 py-2 md:px-[50px] px-3">
            <Navbar.Brand href="#">
                <span className="self-center text-2xl font-bold capitalize text-white whitespace-nowrap dark:text-white">checkr</span>
            </Navbar.Brand>
            <div className="flex md:order-2 items-center justify-center space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to="/" class="text-[#1363DF] bg-white hover:bg-[#f5f5f5] rounded-lg text-sm px-6 py-4 text-center dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify Card</Link>
                <Navbar.Toggle className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#1363DF] bg-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' />
            </div>
            <Navbar.Collapse className='bg-[#1363DF] mt-2'>
                <Link to="/" class="block py-2 px-3 md:p-0 text-white rounded md:hover:bg-transparent hover:bg-white transition-all duration-700 md:hover:text-[#f5f5f5] hover:text-[#1363DF] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Go back to Shopping
                </Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
