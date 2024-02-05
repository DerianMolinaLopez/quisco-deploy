import '../styles/globals.css'
import { QuioscoProvider } from '../context/quioscoProvider'
import '../styles/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />

    </QuioscoProvider>
  )
}

export default MyApp
