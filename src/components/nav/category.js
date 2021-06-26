import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//import database
import data from '../database/navCategory.json'

function Category({innerText, setClicked}) {
   let [submenuIsTrue, setsubmenuIsTrue] = useState(false)
   let [logoIndex, setlogoIndex] = useState(-1)

   const handleClick = (index) => {
      setsubmenuIsTrue(true)
      setlogoIndex(index)
   }

   return (
      <section className="category-outer-div">
         {data.map((category)=>{
            const {Name, id, ItemLogo, Category} = category
                  return innerText === Name?(
                     <div key={id} className="category-inner-div">
                        <div className="menu-logo-div">
                           {ItemLogo.map((logo,index)=>{
                              return <div className={`logo-div ${submenuIsTrue&&logoIndex===index?"logo-border-bottom":""}`}>
                                 <img src={logo} alt={logo} onClick={()=>{handleClick(index)}}/>
                              </div>
                              })}
                        </div>
                        <div className={`category-inner-flex-div ${submenuIsTrue?"toggle-submenu":""}`}>
                           <div>
                              {Category.slice(0,2).map((categoryList)=>{
                                 const {id, Title, CategoryList} = categoryList
                                 return(
                                    <div key={id} className="each-category-div">
                                       <h5>{Title}</h5>
                                       {CategoryList.map((item, index)=>{
                                          return <Link to={`/eachproduct/${logoIndex}/${innerText}/1/${item}`} className="link"><p key={index} onClick={()=>{setClicked(false)}}>{item}</p></Link>
                                       })}
                                    </div>
                                 )
                              })}
                           </div>
                           <div>
                              {Category.slice(2,4).map((categoryList)=>{
                                 const {id, Title, CategoryList} = categoryList
                                 return(
                                    <div key={id} className="each-category-div">
                                       <h5>{Title}</h5>
                                       {CategoryList.map((item, index)=>{
                                          return <Link to={`/eachproduct/${logoIndex}/${innerText}/1/${item}`} className="link"><p key={index} onClick={()=>{setClicked(false)}}>{item}</p></Link>
                                       })}
                                    </div>
                                 )
                              })}
                           </div>
                           <div>
                              {Category.slice(4).map((categoryList)=>{
                                 const {id, Title, CategoryList} = categoryList
                                 return(
                                    <div key={id} className="each-category-div">
                                       <h5>{Title}</h5>
                                       {CategoryList.map((item, index)=>{
                                          return <Link to={`/eachproduct/${logoIndex}/${innerText}/1/${item}`} className="link"><p key={index} onClick={()=>{setClicked(false)}}>{item}</p></Link>
                                       })}
                                    </div>
                                 )
                              })}
                           </div>
                        </div>
                     </div>
                  ):""
               }
         )}
      </section>
  )
}

export default Category


/* eachCategory(start,end=null,array){
        <div>
            {array.Category.slice(start,end).map((categoryList)=>{
                return(
                    <div key={categoryList.id} className="each-category-div">
                        <h5>{categoryList.Title}</h5>
                        {categoryList.CategoryList.map((item, index)=>{
                            return <p key={index}>{item}</p>
                        })}
                    </div>
                )
            })}
        </div>
    } */