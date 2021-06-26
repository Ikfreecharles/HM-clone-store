import React from 'react'
import {Link} from 'react-router-dom'

function EachProductMenu({data, productId}){
    const {id, BrandName, ItemLogo} = data;
    return(
        <div className="side-bar">
            <div className="side-bar-name-logo">
                <h2 className="brand-world">World of {BrandName}</h2>
                <div className="item-logo">
                    <img src={ItemLogo} alt={BrandName}/>
                </div>
            </div>
            <div className="side-bar-menu">
                <ul className="side-bar-ul menu-ul">
                    <li><Link to={`/eachproduct/${id}`} className="link">Welcome</Link></li>
                    <li><Link to={`/eachproduct/${id}/Women`} className="link">Women</Link></li>
                    <li><Link to={`/eachproduct/${id}/Men`} className="link">Men</Link></li>
                </ul>
            </div>
            <div className="side-bar-submenu">
                <ul className="side-bar-ul submenu-ul">
                    <li>New in</li>
                    <li>Fashion Shows</li>
                    <li>Campaigns</li>
                    <li>Sale</li>
                </ul>
            </div>
        </div>
    )
}

export default EachProductMenu;