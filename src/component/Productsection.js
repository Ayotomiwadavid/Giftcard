import React from 'react'
import Productcard from './Productcard'
import { products } from '../Productjson/product'

const Productsection = () => {
    return (
        <section className="bg-transparent dark:bg-gray-900" id='buyCard'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Products</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div>
                <div className="grid gap-5 mb-6 lg:mb-16 md:grid-cols-3 w-full place-items-center">
                    {
                        products.map((product) => {
                            return <Productcard
                                productImage={product.productjsonImage}
                                productPrice={product.productPrice}
                                productName={product.productName}
                                key={product.productId}
                                productId={product.productId}
                            />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Productsection