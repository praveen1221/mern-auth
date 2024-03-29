import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const { currentUser } = useSelector(s => s.user)

    return currentUser ? <Outlet /> : <Navigate to='/signin' />
}
