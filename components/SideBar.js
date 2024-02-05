import React from 'react';
import Image from 'next/image';
import logo from '../assets/img/logo.svg';
import useQuiosco from '../hook/useQuiosco';
import Categoria from './Categoria';
const SideBar = () => {
  const {categorias} = useQuiosco();
  
  return (
    <div>
      <Image
        width={300}
        height={100}
        src={logo}
        alt='logo de la pagina'
      />

      <nav>
        {
          categorias.map(categoria => (
            <Categoria
              key={categoria.id}
              categoria={categoria}
            />
          ))
        }
        </nav>
    </div>
  );
};

export default SideBar;
