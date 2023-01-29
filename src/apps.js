import React from "react"  

import Card from "./components/card"
import Nav from "./components/nav"
import Setion from "./components/section"
import Data from "./Data"

export default function Apps(){
    let cardData =Data.map( info =>{
        return(<Card 
            // the prop(pram) = itemx.theDatafileItem
            key={info.id}
            info = {info}
            // {{...info}}
        />)
    }
    ) 
    return(
     <div>
        <Nav />
        <Setion />
        <div className="cards">
       {cardData}
       </div>
     </div>
    )
}