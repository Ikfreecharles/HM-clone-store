import React from "react";
import { Link } from "react-router-dom";

//import data and components
import data from "../../database/navCategory.json";

function SideBar({match }) {

    return (
        <section className="sidebar-div">
            {data.map((category) => {
                const {id, Name, Category} = category
                
                    return match.params.gender===Name?( 
                        <div key={id} className="sidebar-div-inner">
                            <h6>{Name}</h6>
                            {Category.map((categoryList)=>{
                                const {id, Title, CategoryList} = categoryList
                                return(
                                    <div key={id} className="sidebar-each-section">
                                        <h6>{Title}</h6>
                                        {CategoryList.map((item)=>{
                                            // The Route path is in the format so that it doesn't lead to thesame path as EachProductPage
                                            return(
                                                <p key={item}>
                                                    <Link to={`/eachproduct/${match.params.id}/${match.params.gender}/1/${item}`} className="link">{item}</Link>
                                                </p>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    ):""
                }
            )}
        </section>
    );
}

export default SideBar;
