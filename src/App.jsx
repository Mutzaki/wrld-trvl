import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Prices from './components/Prices'
import ContactUs from './components/ContactUs'
import Shop from './components/Shop'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='Shop' element={<Shop/>}/>
      <Route path='Prices' element={<Prices/>}/>
      <Route path='Contact-Us' element={<ContactUs/>}/>
      
      <Route path='*' element={<h1>Error</h1>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
