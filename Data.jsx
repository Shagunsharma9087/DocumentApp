import axios from "axios";
import { useEffect,useState } from "react";
import Dataitem from "./Dataitem";

function Data(props)
{
    const[data,setData]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const data = await axios.get(`http://localhost:3000/${props.id}`);
        setData(data.data);
        }
        
        fetchData();
        }, []);
    return(
        <div>
             <h1>Documents </h1>
             {
                data.map((item)=>(<Dataitem title={item.title} description={item.description}/>))
             }

        </div>
    )
}
export default Data;