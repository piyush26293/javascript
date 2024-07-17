import {useNavigate} from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import { useEffect } from "react";
export function PagesComponent(){
    const navigate =useNavigate();
    const isAuthenticated = useAuth();
    useEffect(()=>{
        if(isAuthenticated){
            navigate('/login')
        }
    },[])
    return <div>PagesComponent</div>
}