import React from 'react'
import Layout from '../layout/Layout'
import { useEffect, useCallback } from 'react'
import useQuiosco from '../hook/useQuiosco'
import { formatearDinero } from '../helpers/formatearDinero'

const total = () => {
  const { pedido,nombre,setNombre,colocarOrden, total } = useQuiosco()

  const comprobarPedido = useCallback(() => {
   
    return pedido.length === 0||nombre=="" ;
  }, [pedido,nombre]);

  useEffect(() => {

  }, [pedido, comprobarPedido])
  return (
    <Layout pagina="resumen">
      <h1 className='text-4xl font-black'>Total</h1>
      <p className='text-2xl my-10'>Cofirma tu pedido a continuacion</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label className='block uppercase tex-slate-800 text-xl'>¿A nombre de quien es el pedido?</label>
          <input type='text' 
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
          className='w-full p-2 md:w-1/3 mt-3 border border-gray-300 rounded-md' />
        </div>
        <div className='mt-10'>
          <p className='tex-2xl'>
            Total a pagar {" "} <span className='font-bold'>{formatearDinero(total)}</span>
          </p>
        </div>
        <div>
          <input type='submit'
            disabled={comprobarPedido()}
            className={`w-full text-center lg:w-auto px-5 py-2 rounded uppercase font-bold text-white ${comprobarPedido()?"bg-yellow-300":"bg-yellow-500 hover:bg-yellow-600 cursor-pointer"}  mt-5`}
            value="Confirmar pedido"></input>
        </div>
      </form>
    </Layout>
  )
}

export default total
