import React from 'react'

function Alert(props) {
    console.log(alert.type);
    const capitalize=(word)=>{
        if(word==="danger")
        {
          word="Error";
        }
        const lower=word.toLowerCase();
        //const lower="success"      
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return (
    <div styel={{height:"300px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               
                <strong> {capitalize(props.alert.type)}</strong> {props.alert.msg}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
    </div>    
    )
}

export default Alert
