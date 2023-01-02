import http from '../utils/http'

const getAllClients = async ()=>{
    return await http.get('/user',)
}

const createClient = async (listForm)=>{
    return await http.post('/user',listForm)
}
const getClienteById = async (id)=>{
    return await http.get('/user/'+id)
}
const UpdateClientById = async (data,id)=>{
    return await http.put('/user/'+id,data)
}

const DeleteClient = async (listId)=>{
    return await http.delete('/user/'+listId)
}
const courseAPIS = {
    getAllClients,
    createClient,
    getClienteById,
    UpdateClientById,
    DeleteClient

}
export default courseAPIS