import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import GetApi from '../services/LivreService';

function UpdateLivre() {
  const navigate = useNavigate()
  const params = useParams()

  const [list, setList] = useState({
   Title: '',
   Auteur: '',
   Description: '',
    content: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setList(() => {
      return { ...list, [id]: value }
    })
  }

  useEffect(() => {
    const fetchdata = async () => {
      const data = await GetApi.getLivreById(params.id)
      setList(data.data)
    }
    fetchdata()
  }, [params.id])


  const handleSubmit = async () => {
    try {
     const livre= await GetApi.UpdateLivreById(list , params.id)
     console.log(livre);
      toast.success(livre.data.message)
      navigate('/list-livres')
    }
    catch (errors) {
      console.log(errors.response.data.message);
    }
  }

  return (
    <div className='d-flex flex-column align-items-center w-100'>
      <h1 >Update livre </h1>
      <form className='p-3'>
        <div className="form-group">
          <label > Title: </label>
          <input type="text" onChange={handleChange} value={list.Title} className="form-control" id="Title" />
        </div>
        <div className="form-group">
          <label > Auteur: </label>
          <input type="text" onChange={handleChange} value={list.Auteur} className="form-control" id="Auteur" />
        </div>
        <div className="form-group">
          <label > Description: </label>
          <input type="text" onChange={handleChange} value={list.Description} className="form-control" id="Description" />
        </div>

        <div className="form-group">
          <label > content: </label>
          <input type="file" onChange={handleChange} className="form-control" id="content" />
        </div>
  


      </form>
      <button type="button" onClick={handleSubmit} className="btn btn-primary" >Update </button>

    </div>
  )
}

export default UpdateLivre