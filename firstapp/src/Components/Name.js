import React ,{Component, useState} from "react";
// import { useState } from "react";
// class Name extends Component{
//     state = {name: "Shresth Jaiswal"};
//     constructor(props){
//         SpeechSynthesisErrorEvent(props);
//         this.setName=this.setName.bind(this);
//     }
//     setName(e){
//         this.setState({...this.state,name:"Tanu"})
//     }

//     render() {
//         return (<>
//                     <h1>This name is : {this.state.name}</h1>
//                     <button onClick={this.setName}>
//                         click me
//                     </button>
                    
//         </>)
//     }
// }
const Name=()=>{
    const [state,setState]= useState({name:"Shresth Jaiswal"})
    let setName = (e)=>{
        setState({...state,name:"tanu"})
    }

    return(
        <>
            <h1>the name is :{state.name}</h1>
            <button onClick={setName}>Click me</button>
        </>
    )

}
export default Name;