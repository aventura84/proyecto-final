import {useContext} from "react";
import{Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const Auth = ()=>{
    const {token}=useContext(AuthContext)
return(
    <ul>
        <li>
            <Link to="/register">Register</Link>
        </li>
        <li>
            <
        </li>
    </ul>
)




};