import React from 'react'

import data from '../database/cart.json'

function ViewCart({ handleIsClickcartTrue }) {

   return (
      <div className="cart-outer-div" onMouseEnter={()=>{handleIsClickcartTrue(true)}} onMouseLeave={()=>{handleIsClickcartTrue(false)}}>
         {data.length < 1 ? <h5 className="cart-empty">Shopping Cart is empty!</h5> :
            data.map((item)=>{
               const {id, image, ProductName, ProductPrice, MoreDetails, Size, Quantity} = item
               return (
                  <div key={id} className="cart-item-description-div">
                     <div className="cart-item-img">
                        <img src={image[0]} alt={ProductName} />
                     </div>
                     <div className="cart-item-description">
                        <h6>{ProductName}</h6>
                        <h6>{`€${ProductPrice}`}</h6>
                        <p>Quantity: {Quantity}</p>
                        <p>Size: {Size}</p>
                        <p>Item Number: {MoreDetails.ItemNumber}</p>
                        <p>Total Price: {`€${parseFloat(Quantity)*parseFloat(ProductPrice)}`}</p>
                     </div>
                  </div>
               )
            })
         }
         <div className="cart-total-delivery-price-div-outer">
            <div className="cart-total-delivery-price">
               <h6>Total Price</h6>
               <h6>€100</h6>
            </div>
            <div className="cart-total-delivery-price">
               <h6>Delivery Price</h6>
               <h6>€4.99</h6>
            </div>
         </div>
         <div className="cart-grand-cost">
            <h6>Total cost</h6>
            <h6>€104.99</h6>
         </div>
         <div className="cart-grand-cost">
            <button className="cart-checkout-button">To Check out</button>
         </div>
      </div>
   )
}

export default ViewCart
