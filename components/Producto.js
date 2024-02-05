import React from 'react'
import Image from 'next/image'
import useQuiosco from '../hook/useQuiosco'
import { formatearDinero } from '../helpers/formatearDinero'

const Producto = ({producto}) => {
  const {handleSetProducto,handleModal,modal}= useQuiosco()
    const {nombre,precio,imagen} = producto
   
  return (
    <div className='border p-3'>
      <Image
         src={`/img/${imagen}.jpg`}
         alt={`${nombre} imagen del platillo`}
         width={400}
         height={500}
      ></Image>
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{nombre}</h3>
          <p className='mt-5 font-black text-4xl text-amber-500'>
            {formatearDinero(precio)}
          </p>
         <button className='bg-indigo-600 hover:bg-indigo-800 text-white  w-full mt-5 p-3 uppercase font-bold'
                onClick={()=>{
                  handleSetProducto(producto)
                  handleModal()
                }
              }     
         >Ver producto</button>
        
      </div>
    </div>
  )
}

export default Producto