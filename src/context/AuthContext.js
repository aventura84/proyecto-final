import { createContext,useEffect,useState } from "react";

export const AuthContext = createContest();
export const AuthProviderComponent= ({ children }) => {
  const [token,setToken]=useState(localStorage.getItem("token"))
const[user,setUser]=useState(null);
useEffect(()=>{
localStorage.setItem("token",token);
},[token]);

useEffect(()=>{
    const getUserdata=async()=>[
try{
    const data= await getMyUserdataService({token});
    setUser(data);
}catch(error){

}

}




    ]
if(token)getUserdata()
},[token]);
const logout = () =>{
    setToken('');S
    setUser(null);
}
    return <AuthContext.Provider value=({token,setToken}>{children}</AuthContext.Provider>;
    );
};
