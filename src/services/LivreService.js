import http from '../utils/http'

const getAllLivres = async ()=>{
    return await http.get('/livre',)
}

const createLivre = async (data)=>{
    return await http.post('/livre',data)
}
const getLivreById = async (id)=>{
    return await http.get('/livre/'+id)
}
const UpdateLivreById = async (data,id)=>{
    return await http.put('/livre/'+id,data)
}

const DeleteLivre = async (listId)=>{
    return await http.delete('/livre/'+listId)
}
const livreAPIS = {
    getAllLivres,
    createLivre,
    getLivreById,
    UpdateLivreById,
    DeleteLivre
}
export default livreAPIS

