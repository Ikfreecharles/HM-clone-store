import React, { useState, useEffect } from "react";

//import components and data
import BottomBar from "./bottomBar";
import Cart from "./cart";
import Details from "./details";
import EachProductDetails from "./eachProductDetails";
import './viewProduct.css'
import data from '../../database/database.json'

//the match is coming from allProductList.js
function EachProductPage({isTrueAppJS, match}) {
   let [isTrue, setisTrue] = useState("")
   let [innerText, setinnerText] = useState("")

   const {id, gender, genderItemIndex} = match.params

   //function to send to the child Bottombar
   const clickHandler = (childFeedback, childInnerText) => {
      setisTrue(childFeedback)
      setinnerText(childInnerText)
      // isTrueAppJS(childFeedback)
   }

   useEffect(() => {
      document.title=`${data[id][gender][genderItemIndex].ProductName}`
      return () => {
         document.title=""
      }
   }, [match.params])
   return (
      <section className="container-fluid">
         <div className="each-product-page-outer">
            <EachProductDetails match={match} data={data}/>
            <Cart match={match} data={data} />
         </div>
            <BottomBar thisClickHandler={clickHandler}/>
            <Details match={match} isTrue={isTrue} innerText={innerText}/>
      </section>
   );
}

export default EachProductPage;
