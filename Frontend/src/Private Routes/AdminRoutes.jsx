import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
    const student = JSON.parse(localStorage.getItem("student"))
    console.log(student)
    return (
        student ? <Outlet /> : <Navigate to={"/form"} />
    )
}

export default AdminRoutes