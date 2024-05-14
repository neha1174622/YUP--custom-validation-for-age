import React from 'react'
import { Routes, Route } from 'react-router-dom'


import AdminModule from '../modules/AdminModule'
import Dashboard from '../components/admin/feature/Dashboard'
import Users from '../components/admin/feature/Users'
import Booking from '../components/admin/feature/Booking'
import AdminDestination from '../components/admin/feature/Destination'

const AllRoutes = () => {
  return (
        <>
            <Routes>
                

                <Route path='' element={<AdminModule />}>
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='users' element={<Users />} />
                  <Route path='booking' element={<Booking />} />
                  <Route path='destination' element={<AdminDestination />} />
                </Route>
            </Routes>
        </>
  )
}

export default AllRoutes