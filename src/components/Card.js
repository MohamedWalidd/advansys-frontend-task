import React from "react";
import Badge from "./Badge";

import"./card.css"

function Card(){
    return( <div className="card-container">
        <strong>Advansys#1</strong>
        <Badge name ="Active"/>
    </div>)
}

 export default Card;