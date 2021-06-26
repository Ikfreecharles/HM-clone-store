import React from 'react'

//import data and components
import data from '../../../database/database.json'
import { useFetch } from '../useFetch'

function DeliverySidebar({match}) {
    const {item} = useFetch(data, match)

      return (
         <div>
             <div className="details-heading">
                 <h3>Delivery</h3>
             </div>
             <div className="details-eachdetail">
                 <p>{item.DeliveryCondition}</p>
             </div>
         </div>
     )
}

export default DeliverySidebar
