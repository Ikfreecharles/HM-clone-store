import React, { useEffect } from 'react'

//import components and css
import AllProductSingleItem from './allProductSingleItem'
import SideBar from './sidebar';
import './viewAllProduct.css'
import data from "../../database/database.json";

//the information in match is coming from eachProductMenu.js
function AllProjectPage({match}){
    const {id, gender, type} = match.params

    useEffect(() => {
        document.title = `${data[id].BrandName} / ${gender} ${type?`/ ${type}`:""}`
        return () => {
            document.title=""
        }
    }, [id, gender, type])
    return(
        <div className="all-project-page-main">
            <SideBar match={match} />
            <AllProductSingleItem match={match} data={data}/>
        </div>
    )
}

export default AllProjectPage;