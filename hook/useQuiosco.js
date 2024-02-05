import { useContext } from 'react';
import { QuioscoContext } from '../context/quioscoProvider'; 

const useQuiosco = () => {
  return useContext(QuioscoContext);
};

export default useQuiosco;