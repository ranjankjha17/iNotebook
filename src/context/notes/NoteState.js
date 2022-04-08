import React,{useState} from 'react'
import NoteContext from "./noteContext";

function NoteState(props) {
       const s1={
        "name":"Ranjan",
        "class":"5b"
    }
    const [state,setState]=useState(s1);
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name":"chandan",
                "class":"10b"
            })
        },1000);
    }
    return (
       <NoteContext.Provider value={{state,update}}>
           {props.children}
       </NoteContext.Provider>
    )
}

export default NoteState
