import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Data from "./Data";
function Home()
{
    const [title,setTitle]=useState();
    const[description,setDescription]=useState();
    const {state} = useLocation();
    const { email ,id} = state;
    const handleSubmit=async(e)=>{
        await axios.post('http://localhost:3000/add',{UserId:id,title,description})
        .then((result)=>{console.log(result)})
        .catch((err)=>{console.log(err)})
        
    }
    return(
         <div>
             <h1>Login :{email}</h1>
             <h1>id:{id}</h1>
             <div>
             <label htmlFor="title"><strong>Title:</strong></label>
                <input type="text" placeholder="Enter the titte" name="title" onChange={(e)=>setTitle(e.target.value)}></input>
             </div>
             <div>
             <label htmlFor="description"><strong>Description:</strong></label>
                <input type="textarea" placeholder="Enter the description" name="description" onChange={(e)=>setDescription(e.target.value)}></input>
             </div>
             <button onClick={handleSubmit}>create</button>
             <Data id={id}/>

         </div>
    );
        
}
export default Home;