import React from 'react'

//import data and components
import data from '../../../database/database.json'
import { useFetch } from '../useFetch'

function DetailsSidebar({match}) {
    const {moreData} = useFetch(data, match)

    const {Size,Section,Passform,Origin,Concept,CareInformation,ArmLength,ItemNumber} = moreData
    return (
        <div>
            <div className="details-heading">
                <h3>Details</h3>
            </div>
            <div className="details-eachdetail">
                <h6><strong>Size</strong></h6>
                <p>{Size}</p>
            </div>
            <div className="details-eachdetail">
                <h6><strong>Section</strong></h6>
                <p>{Section}</p>
            </div>
            <div className="details-eachdetail">
                <h6><strong>Passform</strong></h6>
                <p>{Passform}</p>
            </div>
            <div className="details-eachdetail">
                <h6><strong>Origin</strong></h6>
                <p>{Origin}</p>
            </div>
            <div className="details-eachdetail">
                <h6><strong>Concept</strong></h6>
                <p>{Concept}</p>
            </div>
            <div className="details-eachdetail">
                <h6><strong>Care Information</strong></h6>
                <p>{CareInformation}</p>
            </div>
            <div className="details-eachdetail">
                <h6><strong>Arm Length</strong></h6>
                <p>{ArmLength}</p>
            </div>
            <div className="details-eachdetail">
                <h6><strong>Item Number</strong></h6>
                <p>{ItemNumber}</p>
            </div>  
        </div>
    )
}

export default DetailsSidebar
