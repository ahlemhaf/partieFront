import React, {useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import clientAPIS from '../services/ClientService'

function UpdateClient() {
  const navigate=useNavigate()
  const params=useParams()

  const [list,setList]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    address:'',
   
  })

  const handleChange=(e)=>{
    const {id,value}=e.target
    setList (()=>{
      return {...list,[id]:value}
    })
  }

  useEffect(()=>{
    const fetchdata=async()=>{
      const data=await clientAPIS.getClienteById(params.id)
      setList(data.data)

    }
    fetchdata()
  },[params.id])


  const handleSubmit = async () => {
    try {
       const user=await clientAPIS.UpdateClientById(list , params.id)
       console.log(user);
        navigate('/list-client')
        if (user.status===200) {
          toast.success(user.data.message)
          navigate('/list-client')
        }
        
    }
    catch (errors) {
      console.log(errors.response.data.message);
    }
  }
  
  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 >Update Learner </h1>
    <form className='p-3 col-6'>
    <div className="form-group">
        <label > first_Name: </label>
        <input type="text" onChange={handleChange} value={list.firstName} className="form-control" id="firstName" />
    </div>

    <div className="form-group">
        <label > last_Name: </label>
        <input type="text" onChange={handleChange} value={list.lastName} className="form-control" id="lastName" />
    </div>

    
    <div className="form-group">
        <label > Email: </label>
        <input type="email" onChange={handleChange} value={list.email} className="form-control" id="email" />
    </div>
 
    <div className="form-group">
        <label forhtml="email"> Password: </label>
        <input type="password" onChange={handleChange} value={list.password} className="form-control" id="password" />
    </div>

    <div className="form-group">
        <label > Address: </label>
        <input type="text" onChange={handleChange} value={list.address} className="form-control" id="address" />
    </div>

   

</form>
<button type="button"  onClick={handleSubmit} className="btn btn-primary" >Update </button>

</div>
  )
}

export default UpdateClient