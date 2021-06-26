import React, { useState } from "react";
import { Link } from "react-router-dom";

//import css and components
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";
import './nav.css'
import data from '../database/menu.json'
import Category from "./category";
import ViewCart from "./viewCart";

function Nav() {
    const [innerText, setinnerText] = useState("")
    const [clicked, setclicked] = useState(false)
    const [clickCartIsTrue, setclickCartIsTrue] = useState(false)

    const getText = (innerText) =>{
       setinnerText(innerText)
       setclicked((clicked)=>!clicked)
    }
    
    const setClicked = (childData) => {
       setclicked(childData)
    }

    const handleIsClickcartTrue = (childSelection) => {
        setclickCartIsTrue(childSelection)
    }

    return (
      <nav>
          <header>
              <div className="nav-menu-bar">
                  <div className="top-nav-bar">
                      <div className="top-nav-bar-inner">
                          <p>Customer Service</p>
                          <p>Newsletter</p>
                          <p>Find a store</p>
                      </div>
                  </div>
                  <div className="logo">
                      <Link to="/"><img src={"/logos/2560px-H&M-Logo.svg.png"} alt={"logo"} /></Link>
                  </div>
                  <div className="signin-cart-fav">
                      <div className="signin-cart-fav-innner">
                          <p>Sign in</p>
                          <a href="http://www.google.com"><p><GrFavorite className="signin-cart-fav-icon"/> Favourite</p></a>
                          <p onClick={()=>setclickCartIsTrue((clickCartIsTrue)=>!clickCartIsTrue)} ><HiOutlineShoppingBag className="signin-cart-fav-icon"/> My cart</p>
                          <a href="http://www.google.com"><p><HiOutlineSearch className="signin-cart-fav-icon"/></p></a>
                      </div>
                  </div>
              </div>
              <div className="menu">
                  <ul>
                      {data.map((menu)=>{
                          return <li key={menu.id} onClick={(e)=>getText(e.target.innerText)}>{menu.menu}</li>
                      })}
                  </ul>
              </div>
              {clickCartIsTrue && <ViewCart handleIsClickcartTrue={handleIsClickcartTrue}/>}
          </header>
          {clicked?<Category innerText={innerText} setClicked={setClicked}/>:""}
      </nav>
  );
}

export default Nav;