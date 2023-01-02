
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import clientService from '../services/ClientService'

function ListClient() {

  const [listForm, setListForm] = useState([])
  const fetchdata = async () => {
    const li = await clientService.getAllClients()
    setListForm(li.data)
  }



  const handleDelete = async (listId) => {

   const user= await clientService.DeleteClient(listId)
    fetchdata()
    if (user.status===200) {
      toast.error(user.data.message)
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div className='d-flex flex-column  align-items-center m-3'>
      <h1 className='text-center ' > List of learners</h1>
      <Link className="btn btn-primary m-2 " type="button" to="/AddClient">Add Learner</Link>
      {listForm.length === 0 ? <h1>pas de client</h1> :
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
             
              <th scope="col">actions</th>
            </tr>
          </thead>
          <tbody>
            {listForm.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td >{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                 

                  <td>  <Link className="btn btn-success m-2" type="button" to={`/UpdateClient/${user._id}`}>Update</Link>
                    <button className="btn btn-danger m-2" onClick={() => handleDelete(user._id)}>Delete</button></td>

                </tr>
              )
            })}

          </tbody>
        </table>}
    </div>
  )
}

export default ListClient
