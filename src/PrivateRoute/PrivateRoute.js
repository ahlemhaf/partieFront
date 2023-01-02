import React from 'react'
import { Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"
import { toast } from 'react-toastify';


const isExpiredToken =(token)=> {
    const decoded = jwt_decode(token)
    return Math.floor(new Date().getTime()/1000) >= decoded.exp
}
const  PrivateRoute = ({children}) =>{
    const token = localStorage.getItem('token')
    if (token!==null ) {
        const expired = isExpiredToken(token)
        if (expired) {
            toast.error('Token expired!')
            localStorage.removeItem('token')
        return <Navigate to='/login' />
        } else {
            return children
        }
    } else {
        localStorage.removeItem('token')
        return <Navigate to='/login' />
    }
}

export default PrivateRoute