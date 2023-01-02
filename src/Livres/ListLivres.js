import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import livreService from '../services/LivreService'
function ListLivres() {

  const [livreForm, setLivreForm] = useState([])

  const fetchdata = async () => {
    const li = await livreService.getAllLivres()
    setLivreForm(li.data)
  }
  const handleDelete = async (listId) => {
   const livre= await livreService.DeleteLivre(listId)
    fetchdata()
    if (livre.status===200) {
      toast.error(livre.data.message)
    }

  }

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div className='d-flex flex-column  align-items-center m-3'>
      <h1 className='text-center' > Liste des livres</h1>
      <Link className="btn btn-primary m-2 " type="button" to="/AddLivre">Add livre</Link>
      {livreForm.length === 0 ? <h1>pas de livre</h1> :
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th className="col-1">id</th>
              <th className="col-7">Title</th>
              <th className="col-7">Auteur</th>
              <th className="col-7">Description</th>
              <th className="col-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {livreForm.map((livre, index) => {
              return (
                <tr key={index}>
                  <td >{index + 1}</td>
                  <td>{livre.Title}</td>
                  <td>{livre.Auteur}</td>
                  <td>{livre.Description}</td>
                  <td>  <Link className="btn btn-success m-2" type="button" to={`/UpdateLivre/${livre._id}`}>Update</Link>
                    <button className="btn btn-danger m-2" onClick={() => handleDelete(livre._id)} >Delete</button>
                 
                    </td>

                </tr>
              )
            })}

          </tbody>
        </table>}
    </div>
  )
}

export default ListLivres