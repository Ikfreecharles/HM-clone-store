import React, { useState } from 'react'

function BottomBar({thisClickHandler}) {
    let [isTrue, setisTrue] = useState(true)
    
    const handleClick = (innerText) => {
        setisTrue(!isTrue)
        thisClickHandler(isTrue, innerText)
    }
    return (
        <section className="each-product-details-review-delivery-div">
            <div className="each-product-details-review-delivery-div-inner">
                <p onClick={(e)=>handleClick(e.target.innerHTML)}>Details</p>
                <p onClick={(e)=>handleClick(e.target.innerHTML)}>Reviews</p>
                <p onClick={(e)=>handleClick(e.target.innerHTML)}>Delivery and Payment</p>
            </div>
        </section>
    )
}

export default BottomBar