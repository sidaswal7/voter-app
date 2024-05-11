import React from "react";

const CandidateContext = React.createContext({
    candidates:[], 
    incVotes: ()=>{},
    removeVote: ()=>{}
})

export default CandidateContext;