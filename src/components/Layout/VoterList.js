import React from "react";
import classes from "./VoterList.module.css"
const candidates = [{
    name:"Arvind",
    total:0
},{
    name:"Rahul",
    total:0
},{
    name:"Naren",
    total:0
}];

const VoterList = ()=>{
    
    return (
        <ul className={classes.voters}>
            {candidates.map((item)=><li>{item.name} Total: {item.total}</li>)}

        </ul>
    )
}
export default VoterList;