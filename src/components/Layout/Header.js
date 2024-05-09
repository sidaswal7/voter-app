import React,{ Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css"

const Header = (props)=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>Class Monitor Vote</h1>
            <h4>Total votes: 0</h4>
            <Button onClick={props.onShowForm}>Add New Vote</Button>
        </header>
    </Fragment>
}

export default Header;