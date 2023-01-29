import React from "react"
import Star from "../img/Star 1.png"

export default function Card(props) {
    let badgeText 
    if (props.openSpots === 0 ) {
        badgeText = "SOLD OUT"
    }
     else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
        {badgeText &&<div className="openspots">{badgeText}</div>}
         <img src={`/assets/${props.info.coverimg}`}alt="" className="cardimg" />
        <div className="rate">
        <img src= {Star} alt="" />
        <span>{props.info.stats.rating} </span>
        <span className="gray"> {props.info.stats.showData}</span>
        <span className="gray"> {props.info.location}</span>
        </div>
        <h5>{props.info.tittle}</h5>
        <span><strong>from {props.info.price} </strong></span>
        <span className="gray">/person</span>
        </div>
    )
}