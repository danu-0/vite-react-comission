import React from 'react';
import { Link } from 'react-router-dom';
import OrderForm from './component/orderForm';
import sidePict from "./assets/image/side.jpg"

function Order() {
  return (
    <div className='flex flex-row bg-slate-500 h-screen w-full'>
      <div className='hidden flex-col h-screen flex-grow lg:flex bg-cover bg-center'  style={{ backgroundImage: `url(${sidePict})` }}>
      </div>
      <div id="order" className="flex flex-col h-full w-full lg:w-auto px-10 py-5 bg-white gap-3">
        <Link to="//" className="btn text-lg">🔙</Link>
        <h1 className="montserrat-medium text-3xl">Order Page</h1>
        <OrderForm />
      </div>
      
    </div>
  );
}

export default Order;
