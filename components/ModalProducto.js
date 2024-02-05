import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { formatearDinero } from '../helpers/formatearDinero'
//comidaquiosco\public\img\cafe_1.jpg
import useQuiosco from '../hook/useQuiosco'
const ModalProducto = () => {
    const  {producto,handleModal,handleAgregarPedido,pedido}= useQuiosco()
    const [cantidad, setCantidad] = useState(1);
    const [edicion,setEdicion]  = useState(false)
    
    useEffect(() => {
        if (pedido.some(pedidoState => pedidoState.id === producto.id)){
          const pedidoActual = pedido.find(pedidoState => pedidoState.id === producto.id)
          setCantidad(pedidoActual.cantidad)
          setEdicion(true)
        }
    },[producto,pedido])

  return (
    <div className='md:flex gap-10'>
        
       <div className=' md:w-1/3'>
        <Image
          width={300}
          height={400}
          alt={`imagen de ${producto.nombre}`}

          src={`/img/${producto.imagen}.jpg`}
        >

        </Image>

       </div>
       <div className='md:w-2/3'>
        <div className='flex justify-end'>
            <button onClick={handleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-15 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            </button>
        </div>
        <h1 className='text-3xl font-bold'>
            {producto.nombre}
        </h1>
        <p className='mt-5 font-black text-5xl text-amber-500'>
            {formatearDinero(producto.precio)}
        </p>
        <div className='flex gap-4 mt-4'>
          <button
              onClick={()=>{
                if(cantidad<= 1) return
                setCantidad(cantidad-1)
              }}
           >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          </button>
          <p className='text-3xl text-black'>
            {cantidad}
          </p>
          <button
              onClick={()=>{
                if(cantidad>= 5) return
                setCantidad(cantidad+1)
              }}
           >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>


          </button>
        </div>
       <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 uppercase rounded mt-5' 
              type='button'
              onClick={()=>{
                handleAgregarPedido({...producto,cantidad})
                handleModal()
              }
            }
              >{edicion? "guardar cambios":"argegar"}</button> 

       </div>
    </div>
  )
}

export default ModalProducto
