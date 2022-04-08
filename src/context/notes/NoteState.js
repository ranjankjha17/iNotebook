import React,{useState} from 'react'
import NoteContext from "./noteContext";

function NoteState(props) {
    const notesInitial=[
        {
            "_id": "61322f19553781a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
    ]
const [notes,setNotes]=useState(notesInitial)
    // const s1={
    //     "name":"Ranjan",
    //     "class":"5b"
    // }
    // const [state,setState]=useState(s1);
    // const update=()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name":"chandan",
    //             "class":"10b"
    //         })
    //     },1000);
    // }
    return (
       <NoteContext.Provider value={{notes,setNotes}}>
           {props.children}
       </NoteContext.Provider>
    )
}

export default NoteState
