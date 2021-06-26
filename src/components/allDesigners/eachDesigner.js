import React, { useState } from "react";
import { Link } from "react-router-dom";

//import components and database
import data from "../database/database.json";

function EachDesigner() {
   let [show, setshow] = useState(false)
   let [activeIndex, setactiveIndex] = useState(-1)
   
   const mouseOver = () => {
      setshow(!show)
   }
   return (
      <section className="outer-div container-fluid">
         {data.map((product, index) => {
            const { id, ItemTop, ItemBottom, ItemLogo, BrandName } = product;
            return (
               <div key={id} className="each-product" onMouseOver={() => {
                     mouseOver();
                     setactiveIndex(index);
                  }} onMouseOut={()=>mouseOver()}>
                      <Link to={`/eachproduct/${id}`}>
                          <div className="image-1-div">
                              <div className={`image-1 ${show && index === activeIndex? " show-top": ""}`}>
                                  <img className="brand-image" src={ItemTop} alt={ItemTop} />
                              </div>
                          </div>
                          <div className="brand-logo">
                              <div className={`brand-logo-inner-div ${show && index === activeIndex? " brand-logo-inner-div-mod": ""}`}>
                                  <img src={ItemLogo} alt={BrandName} />
                              </div>
                          </div>
                          <div className="image-2-div">
                              <div className={`image-2 ${show && index === activeIndex? " show-bottom": ""}`}>
                                  <img className="brand-image" src={ItemBottom} alt={ItemBottom} />
                              </div>
                          </div>
                      </Link>
                  </div>
              );
          })}
      </section>
  );
}

export default EachDesigner;
