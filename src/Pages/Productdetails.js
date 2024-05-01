import React from "react";
import Shoppingcart from "../component/Shoppingcart";
import Ordersummary from "../component/Ordersummary";
import Header from "../component/Header";
import { Cancel } from "@mui/icons-material";

const Productdetails = () => {
  return (
    <main>
      <Header />
      <section className="flex w-full px-6 py-10 h-[89vh] items-center justify-center relative">
        <Shoppingcart />
        <Ordersummary />
        <section className="absolute w-full h-full flex items-center justify-center gap-3 top-0 right-0 bg-[#000] bg-opacity-50">
          <aside className="w-[50%] h-[60%] bg-white rounded-lg flex flex-col items-center justify-center">
            <div className="w-full px-5 py-3 flex items-center justify-between">
              <h2 className="text-xl font-bold font-sans text-[#4e4e4e]">CHOOSE PAYMENT OPTION</h2>
              <Cancel 
                style={{
                    fontSize: '30px',
                    color: '#1363DF'
                }}
              />
            </div>
            <div className="w-full h-full bg-white rounded-md gap-3 p-5 grid grid-cols-2">
              <div className="w-[300px] cursor-pointer h-[90%] rounded-md shadow-xl flex items-center justify-center bg-white"></div>
              <div className="w-[300px] cursor-pointer h-[90%] rounded-md shadow-xl flex items-center justify-center bg-white"></div>
              <div className="w-[300px] cursor-pointer h-[90%] rounded-md shadow-xl flex items-center justify-center bg-white"></div>
              <div className="w-[300px] cursor-pointer h-[90%] rounded-md shadow-xl flex items-center justify-center bg-white"></div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
};

export default Productdetails;
