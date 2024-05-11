import React,{useContext, useState} from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./InputForm.module.css"
import CandidateContext from "../../store/candidate-context";

const InputForm = (props)=>{
    const [enteredName, setEnteredName] = useState("");
    const [enteredCandidate, setEnteredCandidate] = useState(1);
    const candidateCntxt = useContext(CandidateContext)
    const formHandler = (event)=>{
        event.preventDefault();
        candidateCntxt.incVotes({enteredCandidate, enteredName})

    }
    return(
        <Modal>
            <form className={classes.inputForm} onSubmit={formHandler}>
                <label htmlFor="enteredName">Student Name: </label>
                <input type="text"
                        placeholder="Enter the name"
                         id="enteredName" 
                         value={enteredName} 
                         onChange={(event)=>setEnteredName(event.target.value)}/>
                <label htmlFor="enteredCandidate">Choose Monitor: </label>
                <select name="enteredCandidate"
                        id="enteredCandidate"
                        value={enteredCandidate}
                        onChange={(event)=>{setEnteredCandidate(event.target.value)}}
                >
                    {candidateCntxt.candidates.map((candidate)=>{
                        return (
                            <option value={candidate.id}>{candidate.name}</option>
                        )
                    })}
                </select>
                <button type="submit">Vote</button>
                <Button onClick= {props.onHideForm}>X</Button>
            </form>
        </Modal>
        
    )
}

export default InputForm;