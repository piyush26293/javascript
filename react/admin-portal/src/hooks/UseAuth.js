import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

export function useAuth(){
    const [isAuthenticated, setAuth] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setAuth(true)
        }else {
            setAuth(false)
        }
    },[navigate])
}