
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import {useRouter} from 'next/router'
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [hayCategoria,setHayCategoria] = useState(false)
  const [nombre,setNombre] = useState('')
  const router = useRouter()
  const [categorias, setCategorias] = useState([]);
  const [pedido, setPeiddo] = useState([])
  const [modal, setMoal] = useState(false)
  const [categoriaActual, setCategoriaActual] = useState({ });
  const [producto, setProducto] = useState({})
  const [total,setTotal] = useState(0)
  const [paso,setPaso]= useState(1)

  //por cada cambio en el pedido, se actualiza el total
  useEffect(()=>{
    const nuevoTotal = pedido.reduce((acumulado,actual)=>acumulado+actual.precio*actual.cantidad,0)
    setTotal(nuevoTotal)
  },[pedido])




  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
  
    setCategorias(data);
  };
  const handleChangePaso = (paso) => {
  
    setPaso(paso)

  }
  const handleAgregarPedido = ({ categoriaId, ...producto }) => {//!exclucion de informacion
    if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
      //actualizamos en caso de que ya este el prdido registrado

      const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
      setPeiddo(pedidoActualizado)
      toast.success('Producto actualizado')
    } else {
      //caso contrario solo agregamos la cantidad
      setPeiddo([...pedido, producto])
      toast.success('Producto agregado al pedido')
    }

  }
  
  const handleClickCategoria = id => {
    
    const categoria = categorias.filter(cat => cat.id === id)
    setCategoriaActual(categoria[0])
    //cuando estamos en la pagina de resumen, esto me permite ir a la pagina principal de una categoria
    router.push('/')

    setCategoriaActual(categoria[0])
  }
  const handleModal = () => {
    setMoal(!modal)
  }
  //para poder filtrar el producto desde el resumen es necesario de mi pedido, extraer el producto que necesito
  const handleSetProducto = (producto) => {
  
    setProducto(producto)
  }

  useEffect(() => {
    obtenerCategorias();
  }, []);
  const handleEditarCantidades = id =>{
    const pedidoActualizar = pedido.filter(pedidos=>pedidos.id===id)
    setProducto(pedidoActualizar[0])
    setMoal(!modal)
  }
  const handleEliminarProducto = id =>{
    
    const productosFiltrados = pedido.filter(pedido=>pedido.id!==id)
    setPeiddo(productosFiltrados)
  }
  //peticion a la api para enviar todo el conjunto de ordenes
  const colocarOrden =async (e) => {
    e.preventDefault()

    try{
      //las peticiones en caso de post, van acompa;adas del objeto qeu contiene de los datos a mandar 
      const {data} = await axios.post('/api/ordenes',{nombre,pedido,total,fecha:Date.now().toString()})
     //reiniciamos la aplicacion
      setCategoriaActual({ id: 1, icono: 'cafe', nombre: 'Café' })
      setPeiddo([])
      setNombre('')
      
      setCategoriaActual({})
      setTotal(0)
      toast.success('Orden colocada con exito')
      setTimeout(()=>{
        setHayCategoria(false)
        router.push('/')
      },3000)
   
    }catch(error){
      console.log(error)
    }
 
  }

  return (
    <QuioscoContext.Provider
      value={{
        handleAgregarPedido,
        categorias,
        categoriaActual,
        producto,
        setCategoriaActual,
        handleClickCategoria,
        handleSetProducto,
        handleModal,
        modal,
        pedido,
        paso,
        handleChangePaso,
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total,
        hayCategoria,
        setHayCategoria
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};
export { QuioscoProvider, QuioscoContext };
