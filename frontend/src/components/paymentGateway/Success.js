import React from 'react';
import Header from '../Header';

function Success() {
  return (
    <div>
      <Header />
     
        <h1 style={{color:'green', fontFamily:"Tahoma, sans-serif", fontSize:"48px"}}>
            Thank you!!
        </h1>
        <h3>Your Order is Successfuly placed..</h3>
    </div>
  )
}

export default Success