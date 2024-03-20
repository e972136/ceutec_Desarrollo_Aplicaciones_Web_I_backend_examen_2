import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { UsuariosMenu } from './components/UsuariosMenu'
import { UsuariosLogin } from './components/UsuariosLogin'
import { UsuariosCrear } from './components/UsuariosCrear'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

//usuarios

function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<UsuariosLogin/>}>  </Route>
            <Route path='/usuarios/crear' element={<UsuariosCrear/>}>  </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
