import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import clientAPIS from'../services/ClientService'

function AddClient() {
  const navigate=useNavigate();
  const[listForm,setListForm]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    address:'',
   
  })

  const handleChange=(e)=>{
    const {id,value}=e.target
    setListForm(()=>{
      return{...listForm,[id]:value}
    })
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await clientAPIS.createClient(listForm)
        console.log(user)
        if (user.status===201) {
          toast.success(user.data.message)
          navigate('/list-client')
        }else if(user.status===400) 
        {toast.error((user.data.message))}
        
    } catch (err) {
      toast.error(err.response.data.message)

    }
  }

  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 >Add Learner </h1>
    <form className='p-3 col-6'>
    <div className="form-group">
        <label > first_Name: </label>
        <input type="text" onChange={handleChange} className="form-control" id="firstName" />
    </div>

    <div className="form-group">
        <label >last_Name: </label>
        <input type="text" onChange={handleChange} className="form-control" id="lastName" />
    </div>

   
    <div className="form-group">
        <label > Email: </label>
        <input type="email" onChange={handleChange} className="form-control" id="email" />
    </div>

    <div className="form-group">
        <label > Password: </label>
        <input type="password" onChange={handleChange} className="form-control" id="password" />
    </div>

    <div className="form-group">
        <label > Address: </label>
        <input type="text" onChange={handleChange} className="form-control" id="address" />
    </div>
  
    
    <button type="button" onClick={handleSubmit} className="btn btn-primary m-3" >Add</button>
</form>


</div>
  )
}

export default AddClient