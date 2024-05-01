import React, { useState } from "react";
import Shoppingcart from "../component/Shoppingcart";
import Ordersummary from "../component/Ordersummary";
import Header from "../component/Header";
import { Cancel } from "@mui/icons-material";
import BTC from '../Images/BTC.png'
import Etherium from '../Images/Etherium.png'
import cardPayment from '../Images/CradPayment.png'
import cashApp from '../Images/Cashapp.png'

const Productdetails = () => {
    let [popVisibility, setPopUpvisibility] = useState(false)

    const VisilityStateHandlerCaller = () =>{
        setPopUpvisibility(false)
    }

  return (
    <main>
      <Header />
      <section className="flex w-full px-6 py-10 h-[89vh] items-center justify-center relative">
        <Shoppingcart />
        <Ordersummary 
            componentUseState={popVisibility}
            componentUsestateCaller={setPopUpvisibility}
        />
        <section className="absolute w-full h-full flex items-center justify-center gap-3 top-0 right-0 bg-[#000] bg-opacity-50">
          <aside className="w-[50%] h-[60%] bg-white rounded-lg flex flex-col items-center justify-center">
            <div className="w-full px-5 py-3 flex items-center justify-between">
              <h2 className="text-xl font-bold font-sans text-[#4e4e4e]">CHOOSE PAYMENT OPTION</h2>
              <div onClick={VisilityStateHandlerCaller}>
              <Cancel 
                style={{
                    fontSize: '30px',
                    color: '#1363DF'
                }}
              />
              </div>
            </div>
            <div className="w-full h-[90%] bg-white rounded-md gap-2 p-5 grid grid-cols-2">
              <div className="w-[300px] cursor-pointer h-[90%] rounded-md shadow-xl flex flex-col gap-3 items-center justify-center bg-white">
              <img className="w-[50px] h-[50px]" src={BTC} alt="btc img"/>
              <h3>BTC</h3>
              </div>
              <div className="w-[300px] cursor-pointer h-[90%] rounded-md shadow-xl flex flex-col gap-2 items-center justify-center bg-white">
              <img className="w-[50px] h-[50px]" src={Etherium} alt="etherium img" />
              <h3>ETH</h3>
              </div>
              <div className="w-[300px] cursor-pointer h-[90%] rounded-md shadow-xl flex flex-col gap-2 items-center justify-center bg-white">
              <img className="w-[50px] h-[50px]" src={cardPayment} alt="cardpayment" />
              <h3>CARD PAYMENT </h3>
              </div>
              <div className="w-[300px] cursor-pointer h-[90%] rounded-md shadow-xl flex flex-col gap-2 items-center justify-center bg-white">
              <img className="w-[50px] h-[50px]" src={cashApp} alt="cashapp img"/>
              <h3>CASHAPP</h3>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
};

export default Productdetails;
