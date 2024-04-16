import React from 'react'
import cardMarket from '../Images/cardMaket.jpg'

const About = () => {
  return (
    <section class="bg-transparent dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden rounded-lg" src={cardMarket} alt="dashboard image" />
        <div class="mt-4 md:mt-0">
            <h2 class="mb-6 text-lg font-bold text-[#1363DF] uppercase dark:text-white">About Us</h2>
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#0B212F] dark:text-white">PURCHASE GIFT AND VALIDATE GIFT CARDS SWIFTLY WITHOUT PROBLEM.</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <a href="#" class="inline-flex items-center text-[#1363DF] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>
  )
}

export default About
