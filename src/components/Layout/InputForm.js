import React from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./InputForm.module.css"

const InputForm = (props)=>{

    return(
        <Modal>
            <form className={classes.inputForm}>
                <label>Student Name: </label>
                <input type="text" placeholder="Enter the name"/>
                <label>Choose Monitor: </label>
                <select name="category"
                        id="category"
                >
                    <option value="arvind">Arvind</option>
                    <option value="rahul">Rahul</option>
                    <option value="naren">Naren</option>
                </select>
                <Button>Vote</Button>
                <Button onClick= {props.onHideForm} >X</Button>
            </form>
        </Modal>
        
    )
}

export default InputForm;