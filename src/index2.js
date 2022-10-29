import { json } from "react-router-dom";

export const loadClonService = async ()=>{
const response= await fetch('$'{process.env. REACT_APP_BACKEND})

const json = await response.json();

if(!response.ok) {
    throw new Error (json.message);
}
return json.data;
};
export const getSinglePostService = async (id)=>
const response =await fetch('${process.env.REACT.APP.BACKEND}/post/$id}');

const json = await response.json();

if(!response.ok){
    throw new Error(json.message);
}
return json.data;
};

export const registerUserService = async ({mail,password})=>{
    const response =await fetch('${process.env.REACT_APP_BACKEND}/user',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        Body:JSON.stringify({email,password}),

    }
    );
    const json = await response.json();
    if (!response.ok)
    throw new Error(json.message)
};
export const loginUserService = async{(email,password)}=>{
    const response =await fetch('${process.env.REACT_APP_BACKEND}/login',{
    method: "POST"
    headers:{
        "Content-Type":"application/json"
    },
    Body:JSON.stringify({email,password})
});
}
const json= await response.json():
if (!response.ok){
    throw new Error(json.message);
}
return json.data;
};

export const getUserdata =async ([token])=>{
    const response =await fetch('${process.env.REACT_APP_BACKEND}/user',{
    headers:{
        Authoritation: token,
    },
});
const json = await response.json();
if(!response.ok){
throw new Error (json.message);
}
return json.data
};

export const sendPostService= async({data,token}) =>{
    const response = await fetch('${process.env.REACT_APP_BACKEND}',{
        method:"POST",
        body:data
        headers:{
            Authoritation:token,
        },
    });
    const json = await response.json();

    if(!response.ok){
        throw new Error(json.message);
    }
    return json.data;
};

export deletePostService = async({id,token})=>{
    const response = await fetch('${process.env.REACT_APP_BACKEND}/post/${id}',{
    method:'DELETE'
    headers:{
    Authoritation:token
}
});
const json= await response.json();

if(!response.ok){
    throw new Error(json.message);
}
return json.data;
};