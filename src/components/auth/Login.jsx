import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        setEmail("")
        setPass("")
        console.log("email",email)
    }
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-22 px-8 rounded-xl">
        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
         className="flex flex-col items-center justify-center">
            <h1 className=" border-2 border-none  rounded-full py-4 px-5 text-xl outline-none text-black bg-white">Login Page</h1>
          <input
          value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
           required className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl outline-none text-white bg-transparent placeholder:text-gray-400  w-100 mt-10 " type="Email" placeholder="Enter your Email" 
           />
          <input
          value={pass}
          onChange={(e)=>{
            setPass(e.target.value)
          }}
           required className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl outline-none text-white bg-transparent placeholder:text-gray-400 mt-8  w-100"  type="password" placeholder="Enter your Password" />
          <button className=" mt-7 border-2 border-none  rounded-full py-4 px-5 text-xl outline-none text-white bg-emerald-600 w-100 cursor-pointer" > Login </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
