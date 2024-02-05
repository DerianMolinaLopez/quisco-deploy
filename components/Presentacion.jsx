import React from 'react'
import Image from 'next/image'
import Hombre from '../public/img/Hombre.svg'
import Mujer from '../public/img/Mujer.svg'
const Presentacion = () => {
  return (
    <div className='text-center'>
      <h1 className='text-5xl font-bold'>Basta de filas</h1>
      <p className='mt-5 text-3xl font-bold'>Crea tu pedido personalizado</p>
      <div className='flex flex-row mt-10'>
        <picture>
            <Image src={Hombre}
               alt='Hombre'
               width={400}
               height={500} />
        </picture>
        <picture>
             <Image 
              width={400}
              height={500}
             
              src={Mujer} alt='Mujer' />
        </picture>
        <picture>
            <Image src={Hombre}
               alt='Hombre'
               width={400}
               height={500} />
        </picture>
       
      </div>
    </div>
  )
}

export default Presentacion
