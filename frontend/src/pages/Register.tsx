import {useForm} from "react-hook-form";

//type
type RegisterFormData = {
  firstName:string,
  lastName:string;
  email:string;
  password:string;
  confirmPassword:string;
}

const Register = () => {

  const {register}= useForm<RegisterFormData>();


  return (
    <form className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold">Create an Account</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <label className="text-gray-700 text-sm font-bold" ></label>

        </div>
    </form>
  )
}

export default Register
