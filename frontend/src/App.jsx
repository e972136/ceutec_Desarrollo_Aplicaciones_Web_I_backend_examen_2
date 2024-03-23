import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { UsuariosMenu } from './components/UsuariosMenu'
import { UsuariosLogin } from './components/UsuariosLogin'
import { UsuariosCrear } from './components/UsuariosCrear'
import { EstimacionesListado } from './components/EstimacionesListado'
import { EstimacionesEditar } from './components/EstimacionesEditar'
import { EstimacionesCrear } from './components/EstimacionesCrear'
import { Reparaciones } from './components/Reparaciones'
import { ReparacionesAgregar } from './components/ReparacionesAgregar'
import { ReparacionAdicional } from './components/ReparacionAdicional'
import { Repuestos } from './components/Repuestos'
import { RepuestosEditar } from './components/RepuestosEditar'
import { ReparacionesEditar } from './components/ReparacionesEditar'
import { ReparacionAdicionalEditar } from './components/ReparacionAdicionalEditar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//usuarios

function App() {
 

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<UsuariosLogin/>}>  </Route>
            <Route path='/usuarios/crear' element={<UsuariosCrear/>}>  </Route>
            <Route path='/estimaciones' element={<EstimacionesListado/>}>  </Route>
            <Route path='/estimaciones/crear' element={<EstimacionesCrear/>}>  </Route>
            <Route path='/estimaciones/editar/:id' element={<EstimacionesEditar/>}>  </Route>

            <Route path='/reparaciones/:id' element={<Reparaciones/>}>  </Route>
            <Route path='/repuestos/:id' element={<Repuestos/>}>  </Route>
            <Route path='/reparacion_adicional/:id' element={<ReparacionAdicional/>}>  </Route>


            <Route path='/repuestos/editar/:id/:idPublcacion' element={<RepuestosEditar/>}>  </Route>
            <Route path='/reparacion/editar/:id/:idPublcacion' element={<ReparacionesEditar/>}>  </Route>
            <Route path='/reparacion_adicional/editar/:id/:idPublcacion' element={<ReparacionAdicionalEditar/>}>  </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
