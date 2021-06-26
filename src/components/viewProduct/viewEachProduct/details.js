import React from 'react'
import DeliverySidebar from './sidebars/deliverySidebar'
import DetailsSidebar from './sidebars/detailsSidebar'
import ReviewSidebar from './sidebars/reviewSidebar'

function Details({innerText, isTrue, match}){
   return (
      <div className={`details-div-outer ${isTrue?"side-drawer":""}`}>
         {
            innerText==="Details"
            ?<DetailsSidebar match={match}/>
            :innerText==="Delivery and Payment"
            ?<DeliverySidebar match={match}/>
            :innerText==="Review"?<ReviewSidebar/>:""
         }
      </div>
   )
}

export default Details
