import React, { useEffect } from 'react'

//import components and css
import EachDesigner from './eachDesigner'
import './allDesigner.css'

function AllDesigners(){

    useEffect(() => {
        document.title = "All Brands"
        return () => {
            document.title = ""
        }
    })
    return(
        <div>
            <EachDesigner/>
        </div>
    )
}

export default AllDesigners;