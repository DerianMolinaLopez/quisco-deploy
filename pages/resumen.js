import React from 'react'
import Layout from '../layout/Layout'
import useQuiosco from '../hook/useQuiosco'
import ResumenProducto from '../components/ResumenProducto'
const resumen = () => {
  const {pedido} = useQuiosco()
  return (
    <Layout pagina="resumen">
        <h1 className='text-4xl font-black'>Resumen</h1>
        <p className='text-2xl my-10'>Revisa tu pedido</p>
        {pedido.length ===0? (<h1>Aun no hyay productos</h1>):
        (
          pedido.map(producto =>(
            <ResumenProducto
            key={producto.id}
            producto={producto}
            />
          ))
        )}
    </Layout>
  )
}

export default resumen
