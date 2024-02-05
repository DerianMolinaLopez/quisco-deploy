import React from 'react'
import {useRouter} from 'next/router'
import useQuiosco from '../hook/useQuiosco'
const pasos = [
    {paso:1, nombre:"Menu", url:"/"},
    {paso:2, nombre:"Resumen", url:"/resumen"},
    {paso:3, nombre:"Total", url:"/total"}
]
const Pasos = () => {
  const router = useRouter()
 const {handleChangePaso,paso} = useQuiosco()
 const calcularProgreso = ()=>{
  let valor
  if(router.pathname === "/"){
     valor = 1
 }else  if(router.pathname === "/resumen") {
      valor = 50
 }else{
      valor = 100
 }
 
  return valor
 }
  return (
    <>
      <div className='flex justify-between px-10'>
        {pasos.map(paso => (
            <button 
            onClick={()=>
              {
                 router.push(paso.url)
                 handleChangePaso(paso.paso)
              }
             
            
            }
            key={paso.paso} className='text-2xl font-bold'>
                {paso.nombre}
            </button>
        ))}
      </div>
      <div className='bg-gray-100 mb-100'>
        <div className='rounded-full bg-amber-600 text-xs leading-none h-2 text-center text-white w-10'
        style={{width:`${calcularProgreso()}%`}}
        >

        </div>
      </div>
    </>
  )
}

export default Pasos
