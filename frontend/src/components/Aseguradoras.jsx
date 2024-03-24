import React from 'react'
import { Link } from 'react-router-dom';

export const Aseguradoras = () => {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Menu Principal</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link to="/aseguradoras" className="btn btn-primary ml-3 btn-lg">
                                    Aseguradoras <i className="fa fa-plus-square" aria-hidden="true"></i>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/estimaciones" className="btn btn-success ml-3 btn-lg">
                                    Estimaciones <i className="fa fa-plus-square" aria-hidden="true"></i>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/" className="btn btn-danger  ml-3 btn-lg">
                                    Login <i className="fa fa-plus-square" aria-hidden="true"></i>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
