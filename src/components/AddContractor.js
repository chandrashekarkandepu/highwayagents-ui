import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import contractorService from '../services/ContractorService'
const AddContractor = () => {
    
const usenavigate=useNavigate();
const[Contractor,setContractor]=useState(
    {
        contractorId:"",
        contractorName:"",
        emailId:"",
        password:"",
        phoneNumber:"",
        city:"",
        state:"",
        country:""
    }
);
const handleChange=(e)=>{
    const value=e.target.value;
    setContractor({...Contractor,[e.target.name]:value});
}

const saveContractor=(e)=>{
    e.preventDefault();
    contractorService.saveContractor(Contractor).then((Response)=>{
      console.log(Response);
      usenavigate("/login/Contractor");  
    }).catch((error)=>{
            console.log(error);
    })
}
const reset=(e)=>{
  e.preventDefault();
  setContractor({
        contractorId:"",
        contractorName:"",
        emailId:"",
        password:"",
        phoneNumber:"",
        city:"",
        state:"",
        country:""
  })
}
 
  return (
         <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
          <div className='font-thin text-2xl tracking-wider'>
          <h1>Contractor Registration</h1>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>ContractorName</label>
            <input type="text" name="contractorName" onChange={(e)=>handleChange(e)} value={Contractor.contractorName} className='h-10 w-96 border mt-2 px-2 py-2 text-blackColor'  ></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>EmailId</label>
            <input type="email" name="emailId" value={Contractor.emailId} onChange={(e)=>handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2 text-blackColor' ></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>Password</label>
            <input type="password" name="password" value={Contractor.password} onChange={(e)=>handleChange(e)}   className='h-10 w-96 border mt-2 px-2 py-2 text-blackColor' ></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>PhoneNumber</label>
            <input type="text" name="phoneNumber"  onChange={(e)=>handleChange(e)}  className='h-10 w-96 border mt-2 px-2 py-2 text-blackColor' value={Contractor.phoneNumber}></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>City</label>
            <input type="text" name="city"  onChange={(e)=>handleChange(e)}    className='h-10 w-96 border mt-2 px-2 py-2 text-blackColor' value={Contractor.city} ></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>State</label>
            <input type="text" name="state"  onChange={(e)=>handleChange(e)}   className='h-10 w-96 border mt-2 px-2 py-2 text-blackColor' value={Contractor.state}></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-normal'>Country</label>
            <input type="text" name="country"  onChange={(e)=>handleChange(e)}    className='h-10 w-96 border mt-2 px-2 py-2 text-blackColor' value={Contractor.country} ></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4 space-x-4'>
            <button onClick={saveContractor} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 '>Register</button>
            <button onClick={reset}
            className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>Clear</button>
          </div>

        </div>
    </div>
   
  )
}

export default AddContractor