import React,{Component, useState} from "react";
import UserDetails from "./UserDetails";
import Test from "./Test";
// import { Component } from "react";
// const AllUserList = ()=>{
//     let allUser = [{
//         name:"john",
//         email:"200abc@gmail.com",
//         phone:"+91-9171728289"
//     },
// {
//     name:"shresth",
//         email:"abc123@gmail.com",
//         phone:"+91-008289"
// }];

// // let array=[<UserDetails user={allUser[0]}/>,
// // <UserDetails user={allUser[1]}/> ]
// // let array = allUser.map((user,index)=>(<UserDetails key={index} user={user} />))

    

// return(
//     <div>
//         {/* <UserDetails user={allUser[0]}/>
//         <UserDetails user={allUser[1]}/> */}
//         {/* {array} */}
//         {allUser.map((user,index)=>(<UserDetails key={index} user={user} />))}
//     </div>


// const AllUserList=()=>{
//     const [state,setState] = useState({
//         name:"Arpan"
//     })
//     // state = {
//     //     name:"Sanatan Kumar"
//     // };
//     let allUser =[{
//                 name:"john",
//                 email:"200abc@gmail.com",
//                 phone:"+91-9171728289"
//             },
//         {
//             name:"shresth",
//                 email:"shresth@gmail.com",
//                 phone:"+91-9374674849"
//         }];
//         let setStateName =(name)=>{
//             setState({...state,name})
//         }

//             return (
//                 <div>
                    
//                         {/* The name is{state.name} */}
//                         <Test name = {state.name} setName={setStateName}/>
                    
//                     {allUser.map((user,index)=>(
//                         <UserDetails key={index} user={user} />

//                     ))}
//                 </div>
//             )
        
    
// }


//class based


class AllUserList extends Component{
    state = {
        name:"Sanatan Kumar"
    };
    componentDidMount(){
        console.log("All user mount")
    }
    setStateName = (name) =>{
        this.setState({...this.state,name});
    };
     allUser =[{
                name:"john",
                email:"200abc@gmail.com",
                phone:"+91-9171728289"
            },
        {
            name:"shresth",
                email:"shresth@gmail.com",
                phone:"+91289388489"
        }];
    render() {
        return (
            <div>
                <Test name={this.state.name} setName={this.setStateName}/>
                {this.allUser.map((user,index)=>{
                    <UserDetails key={index} user={user}/>
                })}
            </div>
        )
    }   


}




export default AllUserList;