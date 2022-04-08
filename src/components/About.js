import React,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

function About() {
    const a=useContext(noteContext)    
    useEffect(() => {
      a.update()
      // eslint-disable-next-line
    }, [])
    return (
        <div>
            This is About{a.state.name}
            <div>
            classes{a.state.class}
            </div>
        </div>
    )
}

export default About
