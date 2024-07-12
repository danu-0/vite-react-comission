import React from 'react';
import { Link } from 'react-router-dom';

function Order() {
  return (
    <div id="order" className="flex flex-col h-auto px-10 py-10 bg-white w-full gap-3">
        <Link to="//" className="btn">Back to Home</Link>
      <h1 className="montserrat-medium text-3xl">Order Page</h1>
      <p className="montserrat-regular">coming soon</p>
      
      {/* Add your order form or content here */}
    </div>
  );
}

export default Order;
