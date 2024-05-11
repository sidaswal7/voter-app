import React, {useState} from "react";
import Header from "./components/Layout/Header";
import VoterList from "./components/Layout/VoterList";
import InputForm from "./components/Layout/InputForm";
import CandidateProvider from "./store/CandidateProvider";

function App() {
  const [showForm, setShowForm] = useState(false)

  const showFormHandler = ()=>{
    setShowForm(true);
  }
  const hideFormHandler = ()=>{
    setShowForm(false);
  }
  return (
    <>
    <CandidateProvider>
      {showForm && <InputForm onHideForm={hideFormHandler}/>}
        <Header onShowForm= {showFormHandler}/>
        <VoterList/>
  
    </CandidateProvider>
    </>
  );
}

export default App;
