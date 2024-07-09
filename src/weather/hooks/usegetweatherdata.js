import { getUsers } from "../utils";
import { useState,useEffect } from "react";

 export const useGetWeather = ()=>{
    
    const [users,setData] = useState([]);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);

    useEffect(()=> {
        const fetchUsers = async()=>{
            try{
            setLoading(true);
            const users = await getUsers();
            console.log({users});
            setData(data.data)
            setLoading(false)
            }
            catch (error){
                setError(error.message);
                setLoading(false);
            }
        }
        fetchUsers();
    },[])
    return {
        users,
        loading,
        error
    }
}