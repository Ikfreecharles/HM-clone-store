import React from 'react'

//import components and data
import { useFetch } from './useFetch'

function EachProductDetails({match, data}){
   const {item, moreData, image} = useFetch(data, match)
   const{Description}=item
   const{Size,Passform,Origin,ItemNumber}=moreData
   
   return (
      <section className="each-product-image-outer-div">
         <div className="each-product-image-inner-div">
            {image.slice(0,2).map((image)=>{
               return(
                  <div key={image} className="each-product-image">
                     <img src={image} alt={image} />
                  </div>
               )
            })}
         </div>
         <div className="each-product-description">
            <h5>{Description}</h5>
            <div>
               <p><strong>Size</strong> - {Size}</p>
               <p><strong>Passform</strong> - {Passform}</p>
               <p><strong>Origin</strong> - {Origin}</p>
               <p><strong>Item Number</strong> - {ItemNumber}</p>
            </div>
         </div>
         <div className="each-product-image-inner-div">
            {image.slice(2).map((image)=>{
               return(
                  <div key={image} className="each-product-image">
                     <img src={image} alt={image} />
                  </div>
               )
            })}
         </div>
      </section>
   )
}

export default EachProductDetails
