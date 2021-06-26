import React, { useState, useEffect } from "react";

//import components, css and database
import EachProductMenu from "./eachProductMenu";
import EachProductDetails from "./eachProductDetails";
import './eachProduct.css'
import data from '../database/database.json'

//match is bringing params from the link from eachDesigner.js
function EachProduct({ match }) {
  const [items, setitems] = useState(data[match.params.id])

  useEffect(() => {
    document.title = `Welcome to ${items.BrandName}`
    return () => {
      document.title=""
      setitems("")
    }
  }, [items.BrandName])
  
  return (
    <div className="each-product-outer-div">
      <EachProductMenu data={items} productId={match.params.id}/>
      <EachProductDetails data={items} productId={match.params.id}/>
    </div>
  );
}

export default EachProduct;
