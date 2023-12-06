import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import contractorService from '../services/ContractorService';
const ContractorLogin = () => {
const usenavigate=useNavigate();
const [loginDTO,setloginDTO]=useState({
    emailId:"",
    password:""
});
const handleChange=(e)=>{
    const value=e.target.value;
    setloginDTO({...loginDTO,[e.target.name]:value});
}

const loginContractor=(e)=>{
    e.preventDefault();
    contractorService.loginContractor(loginDTO).then((Response)=>{
      console.log(Response);
      usenavigate("/register/contractor");  
    }).catch((error)=>{
            console.log(error);
    })
}



  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">

    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tigh text-white">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
        <div class="mt-2">
          <input id="email" name="emailId"  type="email"  autocomplete="email" required   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>handleChange(e)} value={loginDTO.emailId}/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={loginDTO.password} onChange={(e)=>handleChange(e)}/>
        </div>
      </div>

      <div>
        <button onClick={loginContractor}   type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="/register/contractor" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create an account</a>
    </p>
  </div>
</div>
  )
}

export default ContractorLogin