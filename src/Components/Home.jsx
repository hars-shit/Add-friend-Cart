import React  from "react";
import data from "./data";
import '../Style/Home.css';
import { Link } from "react-router-dom";
import {HiUserAdd} from 'react-icons/hi';
import { useDispatch } from "react-redux";
import { saveProfile } from "../store/slices/microReducer";

const Home=()=>{
    
    const dispatch=useDispatch();
    // const user = useSelector((state)=>state.users)
    
   
    return(
        <div className="content-division">
            <h1>People you can add with </h1>
            <Link to={"/AddFriend"} id="friends-list"><button id="list-button">Friends List</button></Link>
        {
        
         data.map((item,id)=>{
             
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
               <div className="btn-container">
                <button onClick={()=>dispatch(saveProfile(item))}>< HiUserAdd /></button>
               </div>
               </div>
             
            )
         })
        }
        
        </div>
    );
}
export default Home;