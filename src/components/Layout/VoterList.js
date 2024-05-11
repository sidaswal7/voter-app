import React, { useContext } from "react";
import classes from "./VoterList.module.css"
import CandidateContext from "../../store/candidate-context";

const Candidate = ({data})=>{
    const candidateCntxt = useContext(CandidateContext);
    let {id,name,voters,votesReceived} = data;
    return(
        <ul>
            <li>{name}</li>
            <li>{voters.map((voter)=>{
                return <div className={classes.flex}>
                    <p>{voter}</p>
                    <button className={classes.btn} onClick={()=>{candidateCntxt.removeVote(voter,id)}}>Delete</button>
                </div>
            })}</li>
            <li>Votes: {votesReceived}</li>
        </ul>
    )
}

const VoterList = ()=>{
    const candidateCntxt = useContext(CandidateContext);
    return (
        <>
        
        {candidateCntxt.candidates.map((candidate)=>{
            return <Candidate data={candidate}/>
        })}
        </>
    )
}


export default VoterList;