import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import agencyService from '../services/AgencyService';


const AddAgency = () => {
    const usenavigate=useNavigate();

    const[Agency,setAgency]=useState({
        agencyId:"",
        agencyName:"",
        agencyType:"",
        emailId:"",
        password:"",
        phoneNumber:"",
        city:"",
        state:"",
        Country:""

    });
    const handleChange=(e)=>{
        const value=e.target.value;
        setAgency({...Agency,[e.target.name]:value});
    }
    
    const saveAgency=(e)=>{
        e.preventDefault();
        agencyService.saveAgency(Agency).then((Response)=>{
          console.log(Response);
          usenavigate("/login/Contractor");  
        }).catch((error)=>{
                console.log(error);
        })
    }
    const reset=(e)=>{
        e.preventDefault();
        setAgency({
              agencyId:"",
              agencyName:"",
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
      <h1>Agency Registration</h1>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>AgencyName</label>
        <input type="text" name="agencyName"   className='h-10 w-96 border mt-2 px-2 py-2' value={Agency.agencyName} onChange={(e)=>handleChange(e)}></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>AgencyType</label>
        <input type="text" name="agencyType"  className='h-10 w-96 border mt-2 px-2 py-2' value={Agency.agencyType} onChange={(e)=>handleChange(e)} ></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>EmailId</label>
        <input type="email" name="emailId" value={Agency.emailId} onChange={(e)=>handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2' ></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>Password</label>
        <input type="password" name="password" value={Agency.password} onChange={(e)=>handleChange(e)}   className='h-10 w-96 border mt-2 px-2 py-2' ></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>PhoneNumber</label>
        <input type="text" name="phoneNumber"  onChange={(e)=>handleChange(e)}  className='h-10 w-96 border mt-2 px-2 py-2' value={Agency.phoneNumber}></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>City</label>
        <input type="text" name="city"  onChange={(e)=>handleChange(e)}    className='h-10 w-96 border mt-2 px-2 py-2' value={Agency.city} ></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>State</label>
        <input type="text" name="state"  onChange={(e)=>handleChange(e)}   className='h-10 w-96 border mt-2 px-2 py-2' value={Agency.state}></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4'>
        <label className='block text-gray-600 text-sm font-normal'>Country</label>
        <input type="text" name="Country"  onChange={(e)=>handleChange(e)}    className='h-10 w-96 border mt-2 px-2 py-2' value={Agency.Country} ></input>
      </div>
      <div className='items-center justify-center h-14 w-full my-4 space-x-4'>
        <button onClick={saveAgency} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Register</button>
        <button onClick={reset}
        className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>Clear</button>
      </div>

    </div>

</div>
  )
}

export default AddAgency