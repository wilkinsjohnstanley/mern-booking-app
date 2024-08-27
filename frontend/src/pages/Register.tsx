import {useForm} from "react-hook-form";
import { useMutation } from "react-query";
//import ALL functions from the API client as a variable
import * as apiClient from '../api-client';
//type
export type RegisterFormData = {
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  confirmPassword:string;
};

const Register = () => {
  console.log("Register Component Loaded");
  const {
    register, 
    watch, 
    handleSubmit,
    formState:{errors},
  } = useForm<RegisterFormData>();
  
  //this will be imported from React Query
  //put, post, delete requests can be done with this hook
  const mutation = useMutation(apiClient.register, {
    //define what to do if ok or if bad
    onSuccess: async () => {
      console.log("Registration was a success!")
    },
    onError:(error:Error)=>{
      console.log(error.message);
    }
  })

  // create a function that calls the handleSubmit function
  const onSubmit = handleSubmit((data)=>{
    // console.log(data);
    //put it here so it only calls if ok
    mutation.mutate(data);
  });
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <div className="flex flex-col md:flex-row gap-5">

          <label className="text-gray-700 text-sm font-bold flex-1" >
            First Name 
            <input 
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("firstName", {required:"This field is required."})}
            ></input>
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}

          </label>

          <label className="text-gray-700 text-sm font-bold flex-1" >
            Last Name 
            <input 
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastName", {required:"This field is required."})}
            ></input>
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </label>
          </div>
          <label className="text-gray-700 text-sm font-bold flex-1" >
            Email
            <input 
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("email", {required:"This field is required."})}
            ></input>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>

          <label className="text-gray-700 text-sm font-bold flex-1" >
            Password
            <input 
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("password", {
              required:"This field is required.",
              minLength:{
                value:6,
                message:"Password must be at least six characters"
              },
            })}
            ></input>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>

          <label className="text-gray-700 text-sm font-bold flex-1" >
            Confirm Password
            <input 
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("confirmPassword", {
              validate:(val)=>{
                if(!val){
                  return "This field is requireds"
                } else if(watch("password") !== val){
                  return "Your passwords do not match";
                }
              }             
            })}
            ></input>
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword.message}</span>
            )}
          </label>
          {/* add a sign in link */}
          <span>
            <button 
            type="submit"
            className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">
              Create Account
            </button>
          </span>
    </form>
  )
}

export default Register;
