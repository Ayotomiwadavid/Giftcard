import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Productjson/product'
import { handleIncrement, handleDecrement } from '../Controller'

const Ordersummary = () => {
    let {id} = useParams();
    let [productPrice, setProductPrice] = useState('')
    let indexOfColon = id.indexOf(':')
    let streamedId = id.substring(indexOfColon + 1)
    let realProduct = products.find((product) => product.id = streamedId)
    useEffect(()=>{
        setProductPrice(realProduct.productPrice);
    }, []);
    return (
        <div>
            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                    <div class="space-y-4">
                        <div class="space-y-2">
                            <dl class="flex items-center justify-between gap-4">
                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                <dd class="text-base font-medium text-gray-900 dark:text-white">${productPrice}.00</dd>
                            </dl>

                            <dl class="flex items-center justify-between gap-4">
                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                <dd class="text-base font-medium text-green-600">-$5.00</dd>
                            </dl>
                        </div>

                        <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                            <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                            <dd class="text-base font-bold text-gray-900 dark:text-white">${productPrice - 5}.00</dd>
                        </dl>
                    </div>

                    <div class="flex items-center justify-center w-full p-2">
                        <Button  class="flex w-full h-[45px] items-center justify-between  text-sm font-medium rounded-md bg-[#1363DF] p-[10px] text-white  dark:text-primary-500">
                        Proceed to Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ordersummary
