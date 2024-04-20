import React from 'react'
import Productcard from './Productcard'
import americanXp from '../Images/americanXp.jpg'
import AppleCardImage from '../Images/AppleCard.jpg'
import AmazonCard from '../Images/amazoncard.jpg'
import EbayCard from '../Images/EbayCard.jpg'
import GooglePlayCard from '../Images/Googleplaycard.jpg'

const Productsection = () => {
    return (
        <section class="bg-transparent dark:bg-gray-900" id='buyCard'>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Products</h2>
                    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div>
                <div class="grid gap-5 mb-6 lg:mb-16 md:grid-cols-3 w-full place-items-center">
                    <Productcard
                        productImage={AppleCardImage}
                        productPrice='50'
                        productName='Apple Gift Card'
                        key='1'
                    />
                    <Productcard
                        productImage={AmazonCard}
                        productPrice='50'
                        productName='Amazon Gift Card'
                        key='2'
                    />
                    <Productcard
                        productImage={americanXp}
                        productPrice='50'
                        productName='Amex Gift Card'
                        key='3'
                    />
                    <Productcard
                        productImage={EbayCard}
                        productPrice='50'
                        productName='Ebay Gift Card'
                        key='4'
                    />
                    <Productcard
                        productImage={GooglePlayCard}
                        productPrice='50'
                        productName='Googleplay Gift Card'
                        key='5'
                    />
                    <Productcard
                        productImage={americanXp}
                        productPrice='50'
                        productName='MasterCard Gift Card'
                        key='6'
                    />
                </div>
            </div>
        </section>
    )
}

export default Productsection