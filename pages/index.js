import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import { QuioscoProvider } from '../context/quioscoProvider'
import useQuiosco from '../hook/useQuiosco'
import Producto from '../components/Producto'
export default function Home() {
  const  {categoriaActual} = useQuiosco()
 // console.log(categoriaActual)
  return (

      <div className=''>
      <Layout>
         <h1 className='text-5xl font-extrabold'>{categoriaActual.nombre}</h1>
         <p>Crea tu pedido personalizadop</p>
            <div className='grid gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1'>
        {
          categoriaActual?.productos?.map(producto=>(
            <Producto
              key={producto.id}
              producto={producto}
            />
          ))
        }
      </div>
      </Layout>
     
    </div>

   
    
  )
}
