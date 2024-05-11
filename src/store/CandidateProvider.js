import React, { useState } from "react";
import CandidateContext from "./candidate-context";

const CandidateProvider = (props) => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Arvind",
      votesReceived: 0,
      voters: [],
    },
    {
      id: 2,
      name: "Rahul",
      votesReceived: 0,
      voters: [],
    },
    {
      id: 3,
      name: "Naren",
      votesReceived: 0,
      voters: [],
    },
  ]);

  const incVotesHandler = ({ enteredCandidate, enteredName }) => {
    setCandidates((prev) => {
      return prev.map((candidate) => {
        if (candidate.id == enteredCandidate) {
          return {
            ...candidate,
            votesReceived: candidate.votesReceived + 1,
            voters: [...candidate.voters, enteredName],
          };
        }
        return candidate;
      });
    });
  };
  const removeVoteHandler = (voterName, candidateId) => {
    setCandidates((prev) => {
      return prev.map((candidate) => {
        if (candidate.id == candidateId) {
          return {
            ...candidate,
            votesReceived: candidate.votesReceived - 1,
            voters: candidate.voters.filter((voter) => voter !== voterName),
          };
        }
        return candidate;
      });
    });
  };
  const candidateContext = {
    candidates: candidates,
    incVotes: incVotesHandler,
    removeVote: removeVoteHandler,
  };

  return (
    <CandidateContext.Provider value={candidateContext}>
      {props.children}
    </CandidateContext.Provider>
  );
};

export default CandidateProvider;
 
