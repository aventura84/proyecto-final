import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  email: "",
  id: "",
  token: "",
  login: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({
    email: "",
    id: "",
    token: "",
    login: () => {},
  });

  useEffect(() => {
    setUser({
      email: user.email,
      id: user.id,
      login: (email, password) => {
        alert(email + password);
      },
    });
  }, []);

  //   useEffect(() => {
  //     localStorage.setItem("token", token);
  //   }, [token]);

  // useEffect(()=>{
  //     const getUserdata=async()=>[
  // try{
  //     const data= await getMyUserdataService({token});
  //     setUser(data);
  // }   catch(error){

  // }

  // }
  // ]
  // if(token)getUserdata()
  // },[token]);

  //   const logout = () => {
  //     setToken("");
  //     S;
  //     setUser(null);
  //   };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
  // );
};
