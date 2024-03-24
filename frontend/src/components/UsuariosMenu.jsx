import React from 'react'
import { Link } from 'react-router-dom';

//rafc para crear nuevo

export const UsuariosMenu = () => {
  return (
    <>
    <div className="container">


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Usuarios</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link to="/usuarios/crear" className="btn btn-primary ml-3 btn-lg">
                            Agregar Usuario <i className="fa fa-plus-square" aria-hidden="true"></i>    
                        </Link>
                    </li>             

                    <li className="nav-item ">
                        <Link to="/usuarios/listar" className="btn btn-info  ml-3 btn-lg">
                            Listar Usuarios <i className="fa fa-plus-square" aria-hidden="true"></i>    
                        </Link>
                    </li>    
                    
                </ul>
            </div>
        </nav>





    </div>
</>
  )
}
