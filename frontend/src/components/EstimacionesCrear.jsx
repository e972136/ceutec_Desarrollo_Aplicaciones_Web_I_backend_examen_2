//rafc para crear nuevo
import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EstimacionesCrear = () => {

  const navigate = useNavigate();

  const regresarHandler = ()=>{
    navigate('/estimaciones/');
  }


  return (
    <>
      <div className="container">
        <a href="/estimaciones" className="btn btn-primary">
          Regresar href
        </a>
        <button onClick={regresarHandler}  className="btn btn-success" type="button" >
          Regresar handler
        </button>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3>CREAR ESTIMACION</h3>
              </div>
              <div className="card-body">
                <form method="POST" className="row">
                  <div className="col-3">
                    <label >
                      <b>Estimacion</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="estimacion"
                      readOnly
                    />
                  </div>

                  <div className="col-3">
                    <label >
                      <b>Fecha Evaluacion</b>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaEvaluacion"
                    />
                  </div>
                  <div className="col-6">
                    <label >
                      <b>Implementado Por</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="implementadoPor"
                      readOnly
                    />
                  </div>
                  <div className="col-6">
                    <label >
                      <b>Asegurado</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="asegurado"
                      autoComplete="on"
                    />
                  </div>
                  <div className="col-6">
                    <label >
                      <b>Aseguradora</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="aseguradora"
                      autoComplete="on"
                    />
                  </div>
                  <div className="col-6">
                    <label >
                      <b>Estimado Por</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="estimadoPor"
                    />
                  </div>
                  <div className="col-12">
                    <h2>INFORMACION DEL VEHICULO</h2>
                  </div>

                  <div className="col-3">
                    <label >
                      <b>Placa</b>
                    </label>
                    <input type="text" className="form-control" id="placa" />
                  </div>

                  <div className="col-8"></div>

                  <div className="col-3">
                    <label >
                      <b>Marca</b>
                    </label>
                    <input type="text" className="form-control" id="marca" />
                  </div>

                  <div className="col-4">
                    <label >
                      <b>Modelo</b>
                    </label>
                    <input type="text" className="form-control" id="modelo" />
                  </div>

                  <div className="col-1">
                    <label >
                      <b>Año</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="anioVehiculo"
                    />
                  </div>

                  <div className="col-2">
                    <label >
                      <b>Color</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="colorVehiculo"
                    />
                  </div>

                  <div className="col-2">
                    <label >
                      <b>kM</b>
                    </label>
                    <input type="text" className="form-control" id="kM" />
                  </div>

                  <div className="col-6">
                    <label >
                      <b>Vin O Serie</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vinOSerie"
                    />
                  </div>

                  <div className="col-6"></div>

                  <div className="col-3 mt-1">
                    <label >
                      Total de costos de repuestos:{" "}
                    </label>
                  </div>
                  <div className="col-3 mt-1">
                    <input
                      type="text"
                      className="form-control"
                      id="totalRepuestos"
                      disabled
                    />
                  </div>
                  <div className="col-6  mt-1">
                    <a
                      href="/admin-repuestos"
                      className="btn btn-warning form-control"
                    >
                      LISTA DE REPUESTOS NECESARIOS A REEMPLAZAR
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>

                  <div className="col-3  mt-1">
                    <label >
                      Total de costos de mano de obra:{" "}
                    </label>
                  </div>
                  <div className="col-3  mt-1">
                    <input
                      type="text"
                      className="form-control"
                      id="totalReparaciones"
                      disabled
                    />
                  </div>
                  <div className="col-6  mt-1">
                    <a className="btn btn-warning form-control">
                      LISTA DE REPARACIONES
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>

                  <div className="col-3  mt-1">
                    <label >
                      Total reparaciones adicionales:{" "}
                    </label>
                  </div>
                  <div className="col-3  mt-1">
                    <input
                      type="text"
                      className="form-control "
                      id="totalReparacionesAdicionales"
                      disabled
                    />
                  </div>
                  <div className="col-6  mt-1 ">
                    <a className="btn btn-warning form-control">
                      LISTA DE REPARACIONES ADICIONALES
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>

                  <div className="col-3  mt-1">
                    <label >
                      Total costos adicionales (materiales):{" "}
                    </label>
                  </div>
                  <div className="col-3 mt-1">
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="totalCostosAdicionalesMateriales"
                    />
                  </div>
            
                  <div className="col-12 mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary form-control btn-lg"
                    >
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
