import React from 'react'
import { Link } from 'react-router-dom'

//import data and components
import menu from '../database/menu.json'

function EachProductDetails({ data, productId }) {
   const { BrandName, Banners, Metadata } = data

   try {
      return (
         <section className="each-product-main-div">
            <article className="each-product-menu-container">
               <p>Discover Now!</p>
               <h5>Welcome to {BrandName} Store!</h5>
               <h6>Explore now {BrandName} Store. Elevate your style at the best price.</h6>
               {menu.map((menuList)=>{
                  const { id, menu } = menuList
                  return <Link key={id} to={menu==="All Designers"? `/`: `/eachproduct/${productId}/${menu}` }>
                     <button className="each-product-button">{menu}</button>
                  </Link>
               })}
            </article>
   
             {Banners.map((items)=>{
               const {ArticleTitle, ArticleDescription, images} = items
               return(
                  <article className="each-product-image-section">
                     <div className="each-product-each-image">
                        {images.map((img)=>{
                           return <img src={img} alt={img} />
                        })}
                     </div>
                     <div className="overlay"></div>
                     <div className="each-product-text">
                        <h5>{ArticleTitle}</h5>
                        <p>{ArticleDescription}</p>
                        <button type="submit" className="each-product-btn">Buy now</button>
                     </div>
                  </article>
               )
            })}
               <article className="each-product-matadata">
                  <h5>{BrandName}</h5>
                  <p>{Metadata}</p>
               </article>
         </section>
      );  
   } catch (error) {
      console.log(error)
      return (
         <section className="each-product-main-div">
            <article className="each-product-menu-container">
               <p>Discover Now!</p>
               <h5>Welcome to {BrandName} Store!</h5>
               <h6>Explore now {BrandName} Store. Elevate your style at the best price.</h6>
               {menu.map((menuList)=>{
                  const { id, menu } = menuList
                  return <Link key={id} to={menu==="All Designers"? `/`: `/eachproduct/${productId}/${menu}` }>
                     <button className="each-product-button">{menu}</button>
                  </Link>
               })}
            </article>
         </section>
      )
   }
}

export default EachProductDetails;