import { RegisterFormData } from "./pages/Register";

//this is how you import env variables with Vite
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData:RegisterFormData)=>{
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData),
    });
    //get the body of the response for errors
    //get the response convert to json and assign it
    const responseBody = await response.json();
    if(!response.ok){
        throw new Error(responseBody.message);
    }
};