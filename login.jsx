import { Button } from "bootstrap";
import { useState } from "react"
import { useNavigate} from "react-router-dom";
import{Link,Outlet} from "react-router-dom"
import axios from "axios";

function login()
{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[passtatus,setPassStatus]=useState(true);
    const navigate=useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3000/login',{email,password})
        .then(result=>
            {
                console.log(result)
            if(result.data.email===email)
            {
             navigate('/Home',{state:{
                email:email,
                id:result.data._id
             }})
            }
            else{
                setPassStatus(false);
            }
        }
        ).catch((err)=>console.log(err))
    }
    return(
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmtfor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" autoComplete="off" name="email" onChange={(e)=>{setEmail(e.target.value)}}>
                    </input>
                </div>
                <div>
                <label htmtfor="email"><strong>Password</strong></label>
                    <input type="password" placeholder="enter the password"autoComplete="off" name="password" onChange={(e)=>{setPassword(e.target.value)}}>
                    </input>
                </div>
                {
                    !passtatus && <small>Password is incorrect</small>
                }
                <div>
                <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
            </form>
            <p>New account</p>
                <Link to="/register">Sign In</Link>
        </div>
    )
}
export default login