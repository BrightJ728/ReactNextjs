// import App from 'next/app'
import '../styles/style.css'
import Navbar from '../src/components/navbar'
import ContextProvider from '../src/Usecontext/context'
function MyApp({ Component, pageProps }) {
  return<>
<ContextProvider>
<Navbar/>

   <Component {...pageProps} />
   </ContextProvider>

    </>
  }
  
  
  export default MyApp