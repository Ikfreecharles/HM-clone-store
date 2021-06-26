import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

//import database and component
import SortMenu from "./sort";

function AllProductSingleItem({ match, data }) {
   const [itemArray, setitemArray] = useState([])
   const [productId, setproductId] = useState(-1)

   const { id, gender, type } = match.params;
    
   useEffect(() => {
      if (gender) {
         setitemArray(data[id][gender])
         setproductId(id)
      }
   }, [match])

   const generateContent = (items, id, theGender, index) => {
      return (
         <div key={items.id} className="product-card col-3">
         {/*Link gives us an object called match. This simply allows us to be able to access the value of each dynamic attributes in the link anywhere that link leads */}
            <Link to={`/eachproduct/${id}/${theGender}/${index}`} className="link">
               <div className="product-card-img-div">
                  <img src={items.image[0]} alt={items.ProductName} />
               </div>
               <div className="premium-selection">
                  {items.Premium ? <p>Premium selection</p> : ""}
               </div>
               <h5 className="product-card-product">{items.ProductName}</h5>
               <div>
                  <p className="product-card-price">{items.ProductPrice}</p>
                  <p className="product-card-sizes">{items.AvailableSizes.join(", ")}</p>
               </div>
               <p className="product-card-reviews">Review: {items.Review.length}</p>
            </Link>
         </div>
      );
   }

   try {
      return (
         <section className="container-fluid">
            <h2>Welcome to {data[id].BrandName} store</h2>
            <h5 className="subcategory-detail">{`${data[id].BrandName} / ${gender} ${type?`/ ${type}`:""}`}</h5>
            <SortMenu />
            <div className="row">
               {itemArray.map((items, index) => {
                   if (type) {
                     if (type === "Show all") {
                        return generateContent(items, productId, gender,index);
                     } else if (items.Category.includes(type)) {
                        return generateContent(items,productId,gender,index);
                     }
                  } else {
                     return generateContent(items,productId,gender,index);
                  }
               })}
            </div>
            {itemArray.length>20 && <div className="show-more-button-div">
               <button className="show-more-button">Show More</button>
            </div>}
         </section>
       );
   } catch (error) {
      console.log(error)
      return <section className="container-fluid">
            <h2>Welcome to {data[id].BrandName} store</h2>
            <h5 className="subcategory-detail">{`${data[id].BrandName} / ${gender} ${type?`/ ${type}`:""}`}</h5>
            <SortMenu />
      </section>
   }
}
export default AllProductSingleItem;