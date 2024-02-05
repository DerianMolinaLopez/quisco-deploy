import Head from 'next/head';
import SideBar from '../components/SideBar';
import Presentacion from '../components/Presentacion';
import Modal from 'react-modal'
import Pasos from '../components/Pasos';
import ModalProducto from '../components/ModalProducto';
import useQuiosco from '../hook/useQuiosco';
//import '../styles/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//!queda pendiente arreglar el toastContainer, la aplicaicon truena 
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#__next');  
export default function Layout({children,pagina}) {
    const {modal,hayCategoria,setHayCategoria,categoriaActual} = useQuiosco()

    return(

        <>
        <Head>
        <meta name="desctiption" content="quiosco de cafe"/>
        </Head>
          
            <div className=' lg: flex'>
                <aside className='md:w-4/12 xl:w-1/4 2xl:2-1/5'>
                    <SideBar></SideBar>
                </aside>
                <main className='w-8/12 xl:w-3/4 2xl:2-4/5 h-screen overflow-y-scroll'>
                    <Pasos></Pasos>
                    <div className='p-10'>
                    {hayCategoria ? children : <Presentacion />}

                       
                    </div>
                    
                </main>
            </div>
        {modal&&(
            <Modal isOpen = {modal}
                  style={customStyles}            
            >
                <ModalProducto></ModalProducto>
            </Modal>
        )}
      <ToastContainer
          autoClose={2000}
      ></ToastContainer>
        </>
          
    )
}