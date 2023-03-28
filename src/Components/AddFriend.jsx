import React from "react";

import { useSelector } from "react-redux";

const AddFriend=()=>{
    const data1=useSelector((state)=>{
        return state.users;
    })
  
    return (
        <>
        <div className="content-division">
            <h1>Your Friend List </h1>
        {
        
         data1.map((item,id)=>{
        
            return(

               <div key={id} className="container">
                <div className="data-container">
                <img src={item.image} alt="" />
                <div>
                <h2>Name: {item.name}</h2>
                <h5>Age: {item.age}</h5>
                <p>Address: {item.address}</p>
               </div>
               </div>
               
               </div>
        
            )
            
         })
        }
        
        </div>
        </>
    )
}
export default AddFriend;