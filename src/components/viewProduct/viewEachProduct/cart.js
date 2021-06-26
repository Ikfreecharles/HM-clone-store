import React, { useState } from "react";

//import component and database
import { useFetch } from "./useFetch";
import { GrFormDown,GrFormUp } from "react-icons/gr";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";

//the prop.match is coming from eachProductPage.js
function Cart({match, data}) {
   const [dropDown, setdropDown] = useState(false)
   const [selectedSize, setselectedSize] = useState("")
   const [favClicked, setfavClicked] = useState(false)
   const {item, availableSize} = useFetch(data, match)
  
   const dropDownHandler = () => {
     setdropDown(!dropDown)
   }
   const getInnerText = (innerText) => {
     setselectedSize ( innerText )
     setdropDown (!dropDown)
   }

   const {ProductName,ProductPrice} = item;
   return (
      <section className="product-to-cart-section">
         <div className="product-to-cart-title-fav">
            <p>{ProductName}</p>
            <div onClick={()=>setfavClicked(!favClicked)}>
               {favClicked?< MdFavorite style={{color:"red"}}/>:<MdFavoriteBorder />}
            </div>
         </div>
         <p className="product-to-cart-price">{ProductPrice}</p>
         {/* Div will be filled in later with new data*/}
         <div></div>
         <div className="product-to-cart-size-dropdown">
            <div className="product-to-cart-select-size-div" onClick={()=>dropDownHandler()}>
               <p>{selectedSize===""?"Select size":selectedSize}</p>
               {dropDown?<GrFormUp />:<GrFormDown />}
            </div>
            <div className={`product-to-cart-size-options-outer-div ${dropDown?"show-sizes":""}`}>
               {availableSize.map((size)=>{
                  return(
                     <div key={size}>
                        <p className="product-to-cart-size-options-p" onClick={(e)=>getInnerText(e.target.innerHTML)}>{size}</p>
                     </div>
                  )
               })}
            </div>
         </div>
         <button className="product-to-cart-button"><HiOutlineShoppingBag /> Add to Cart</button>
      </section>
   );
}

export default Cart;