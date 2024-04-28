import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Productjson/product'
import Shownproduct from './Shownproduct'

const Productdetailscard = () => {
    let {id} = useParams()
    let [productDetails, setProductDetails] = useState({
        productDetailsName: '',
        productDetailsPrice: '',
        productDetailsImage: ''
    });

    let productShown = products.find((product) => {
        console.log(id)
        console.log(product.productId)
        let indexOfColon = id.indexOf(':')
        let streamedId = id.substring(indexOfColon + 1)
        console.log(streamedId)
        return product.productId === streamedId
    });

    useEffect(() => {
        setProductDetails({
            productDetailsName: productShown.productName,
            productDetailsPrice: productShown.productPrice,
            productDetailsImage: productShown.productjsonImage
        })
    }, []);

    console.log(productDetails)
  return (
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <Shownproduct 
                            productName = {productDetails.productDetailsName}
                            productPrice = {productDetails.productDetailsPrice}
                            productImage = {productDetails.productDetailsImage}
                        />
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Productdetailscard
