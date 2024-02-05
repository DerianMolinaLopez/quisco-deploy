import React from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import axios from 'axios'
import { formatearDinero } from '../helpers/formatearDinero'
const Orden = ({orden}) => {
   
    const {id, nomrbre,total,pedido}=orden
   
    
    const completarOrden = async() => {
  try {
   const data = await axios.post(`/api/ordenes/${id}`);
   toast.success('Orden completada con exito')
   
  } catch(error) {
    console.log(error);
  }
}
  return (
    <div className='border p-10 space-y-5'>
       <h3 className='text-4xl font-black'> Orden:{id}</h3>
      <p className='text-2xl my-10'>Cliente: {nomrbre}</p>
      <div>
        {pedido.map(platillo => (
           <div key={platillo.id} className='py-3 flex border-b last-of-type:border-0 items-center'>
            <div className='w-32'>
                
                <Image
                      width={400}
                      height={500}
                      src={`/img/${platillo.imagen}.jpg`}
                      alt={`${platillo.nombre} imagen del platillo`}/>
            </div>
            <div className='p-5 space-y-2'>
                <h4 className='text-xl font-bold text-amber-500'>{platillo.nombre}</h4>
                <p className='text-lg font-bold'>Cantidad:{' '}{platillo.cantidad}</p>
            </div>
           </div> 
        ))}
      </div>
      <div className='md:flex md:items-center md:justify-between my-10'>
        <p className='mt-5 font-black text-4xl text-amber-500'>Total a pagar: {" "}{formatearDinero(total)}</p>
       <button
           onClick={completarOrden}
           type='button'
           className='bg-indigo-600 hover:bg-indigo-800 text-white py-3  mt-5 md:mt-0 p-3 rounded-lg uppercase font-bold'
       >Completar Orden</button> 
      </div>
    </div>
  )
}

export default Orden
