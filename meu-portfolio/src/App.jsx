import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Sobre from './sobre'
import Projetos from './Projetos'
import Contato from './Contatos'
import Footer from './Footer'


function App() {

  return(
    <>
      <Header/>
      <Sobre/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </>
  )


}

export default App
