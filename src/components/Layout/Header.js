import React, { Fragment, useContext } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import CandidateContext from "../../store/candidate-context";

const Header = (props) => {
  const candidateCntxt = useContext(CandidateContext);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Class Monitor Vote</h1>
        <h4>
          Total votes:
          {candidateCntxt.candidates.reduce(
            (sum, item) => sum + item.votesReceived,
            0
          )}
        </h4>
        <Button onClick={props.onShowForm}>Add New Vote</Button>
      </header>
    </Fragment>
  );
};

export default Header;
