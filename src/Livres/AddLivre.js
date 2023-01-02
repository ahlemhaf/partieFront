import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import livreAPIS from '../services/LivreService';


function AddLivre() {
  const navigate=useNavigate();
  const[livreForm,setLivreForm]=useState({
   Title:'',
   Auteur:'',
   Description:'',
  });

  const handleChange=(e)=>{
    const {id,value}=e.target
    setLivreForm(()=>{
      return{...livreForm,[id]:value}
    })
  }

  const [file,setFile]=useState();

  const onFileSelect=(e)=>{
    setFile(e.target.files[0])
    console.log(e.target.files[0]);
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData=new FormData();
    Object.keys(livreForm).forEach(fieldName =>{
      formData.append(fieldName,livreForm[fieldName]);
    })
if (file){
  formData.append('content',file,file.name)
}

try {
  const livre = await livreAPIS.createLivre(formData);
    console.log(livre)
    if (livre.status===201) {
      toast.success(livre.data.message)
      navigate('/list-livres')
    }else if(livre.status===400) 
    {toast.error((livre.data.message))}
    }catch(err) {
      toast.error(err.response.data.message)
    }
  }
  

  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 >Add livre </h1>
    <form className='p-3 col-6'>
    <div className="form-group">
        <label > Title: </label>
        <input type="text" onChange={handleChange} className="form-control" id="Title" />
  </div>
  <div className="form-group">
        <label > Auteur: </label>
        <input type="text" onChange={handleChange} className="form-control" id="Auteur" />
  </div>


  <div className="form-group">
        <label > Description: </label>
        <input type="text" onChange={handleChange} className="form-control" id="Description" />
  </div>

    <div className="form-group">
        <label >File: </label>
        <input type="file" onChange={onFileSelect} className="form-control" id="content" />
    </div>
    


    <button type="button" onClick={handleSubmit} className="btn btn-primary m-3" >Upload</button>
</form>


</div>
  )
}

export default AddLivre