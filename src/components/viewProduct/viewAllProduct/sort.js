import React, { useState } from "react";
import { GrFormDown,GrFormUp } from "react-icons/gr";

function SortMenu(){
    let [itemIndex, setitemIndex] = useState(-1)
    let [dropDown, setdropDown] = useState(false)

    const options = ["Recommendation","Latest","Lowest price","Highest price"];
    return (
      <>
          <div className="dropdown">
              <h5 onMouseEnter={()=>setdropDown(true)} onMouseLeave={()=>{setdropDown(false)}} className="sort-by">Sort by {dropDown?<GrFormDown className="dropdown-arrow"/>:<GrFormUp className="dropdown-arrow"/>}</h5>
              <div className="dropdown-content" onMouseEnter={()=>{setdropDown(true)}} onMouseLeave={()=>{setdropDown(false)}}>
                  {options.map((item, i) => {
                      return (
                          <div key={i} className={`dropdown-options ${itemIndex === i ? "active" : ""}`} onClick={() => {setitemIndex(i)}}>
                              <p>{item}</p>
                          </div>
                      );
                  })}
              </div>
          </div>
      </>
  );
}

export default SortMenu;
