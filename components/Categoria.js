import Image from "next/image";
import icono_cafe from "../assets/img/icono_cafe.svg";
import icono_dona from "../assets/img/icono_dona.svg";
import icono_galletas from "../assets/img/icono_galletas.svg";
import icono_hamburguesa from "../assets/img/icono_hamburguesa.svg";
import icono_pizza from "../assets/img/icono_pizza.svg";
import icono_pastel from "../assets/img/icono_pastel.svg";
import useQuiosco from "../hook/useQuiosco";
import { useEffect } from "react";


const iconos = {
   cafe: icono_cafe,
    dona: icono_dona,
    galletas: icono_galletas,
    hamburguesa: icono_hamburguesa,
    pizza: icono_pizza,
    pastel : icono_pastel

}

const Categoria = ({ categoria }) => {
  const {handleClickCategoria,categoriaActual,setHayCategoria} = useQuiosco();
   const { nombre, icono,id} = categoria;

  return (
    <div className= {` flex items-center g-4 w-full border p-4 hover:bg-amber-400 ${categoriaActual.id== id? 'bg-amber-400':''}`} >
     <Image
        width={70}
        height={70}
        src={iconos[icono]}
        alt="Imagen Icono"
      />
     <button 
     onClick={()=>{
      setHayCategoria(true)
      handleClickCategoria(id)}}
     className="text-2xl font-bold hover:cursor-pointer">{nombre}</button> 

    </div>
     
  
  );
};

export default Categoria;

