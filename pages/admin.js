import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Orden from '../components/Orden'
import AdminLayout from '../layout/AdminLayout'
const admin = () => {

  const fetcher = (url) => axios('/api/ordenes').then(datos=>datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher,{refreshInterval:100})
  
  return (
    <AdminLayout pagina="admin">
      <h1 className='font-bold text-6xl mb-5'> Panel de administracion</h1>
     
    {
  data && data.length > 0 
    ? data.map(orden => (
        <Orden 
          key={orden.id}
          orden={orden}
        />
      ))
    : <p>No hay ordenes pendientes</p>
}
    </AdminLayout>
  )
}

export default admin
