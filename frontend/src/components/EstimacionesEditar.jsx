//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const EstimacionesEditar = () => {
  const navigate = useNavigate();

  const regresarHandler = () => {
    navigate("/estimaciones");
  };

  const { id } = useParams();

  const [dataForm, setDataForm] = useState({
    id: "1",
    asegurado: "Franco Lopez",
    estimado_por: "Meylin  Amador",
    fecha_evaluacion: "2024-01-01T06:00:00.000Z",
    aseguradora_id: 1,
    placa: "HAK5195",
    marca: "Suzuki",
    modelo: "Dzire",
    color: "Rojo",
    anio_vehiculo: "2018",
    vin_o_serie: "MA3ZF63SXJA185480",
    obs: "x",
    km: "",
    implementado_por: "",
    total_Reparaciones: 0.0,
  });

  const getDatos = async () => {
    const url = `http://localhost:9090/api/estimacion/${id}`;
    const response = await axios.get(url);
    const datos = (await response).data;
    console.log(datos);
    setDataForm(datos);
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <>
      <div className="container">
        <a href="/estimaciones" className="btn btn-primary">
          Regresar href
        </a>
        <button
          onClick={regresarHandler}
          className="btn btn-success"
          type="button"
        >
          Regresar handler
        </button>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3>EDITAR ESTIMACION</h3>
              </div>
              <div className="card-body">
                <form method="POST" className="row">
                  <div className="col-3">
                    <label htmlFor="estimacion">
                      <b>Estimacion</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="estimacion"
                      value={dataForm.id}
                      readOnly
                    />
                  </div>

                  <div className="col-3">
                    <label htmlFor="fechaEvaluacion">
                      <b>Fecha Evaluacion</b>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fechaEvaluacion"
                      value={dataForm.fecha_evaluacion}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="implementadoPor">
                      <b>Implementado Por</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="implementadoPor"
                      value={dataForm.implementado_por}
                      readOnly
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="asegurado">
                      <b>Asegurado</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="asegurado"
                      autoComplete="on"
                      value={dataForm.asegurado}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="aseguradora">
                      <b>Aseguradora</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="aseguradora"
                      autoComplete="on"
                      value={dataForm.aseguradora_id}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="estimadoPor">
                      <b>Estimado Por</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="estimadoPor"
                      value={dataForm.estimado_por}
                    />
                  </div>
                  <div className="col-12">
                    <h2>INFORMACION DEL VEHICULO</h2>
                  </div>

                  <div className="col-3">
                    <label htmlFor="placa">
                      <b>Placa</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="placa"
                      value={dataForm.placa}
                    />
                  </div>

                  <div className="col-8"></div>

                  <div className="col-3">
                    <label htmlFor="marca">
                      <b>Marca</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="marca"
                      value={dataForm.marca}
                    />
                  </div>

                  <div className="col-4">
                    <label htmlFor="modelo">
                      <b>Modelo</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="modelo"
                      value={dataForm.modelo}
                    />
                  </div>

                  <div className="col-1">
                    <label htmlFor="anioVehiculo">
                      <b>Año</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="anioVehiculo"
                      value={dataForm.anio_vehiculo}
                    />
                  </div>

                  <div className="col-2">
                    <label htmlFor="colorVehiculo">
                      <b>Color</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="colorVehiculo"
                      value={dataForm.color}
                    />
                  </div>

                  <div className="col-2">
                    <label htmlFor="kM">
                      <b>kM</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kM"
                      value={dataForm.km}
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="vinOSerie">
                      <b>Vin O Serie</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vinOSerie"
                      value={dataForm.vin_o_serie}
                    />
                  </div>

                  <div className="col-6"></div>

                  <div className="col-3 mt-1">
                    <label htmlFor="totalRepuestos">
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
                      href={"/repuestos/" + dataForm.id}
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
                    <label htmlFor="totalReparaciones">
                      Total de costos de mano de obra:{" "}
                    </label>
                  </div>
                  <div className="col-3  mt-1">
                    <input
                      type="text"
                      className="form-control"
                      id="totalReparaciones"
                      value={dataForm.total_Reparaciones}
                      disabled
                    />
                  </div>
                  <div className="col-6  mt-1">
                    <a
                      href={"/reparaciones/" + dataForm.id}
                      className="btn btn-warning form-control"
                    >
                      LISTA DE REPARACIONES
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>

                  <div className="col-3  mt-1">
                    <label htmlFor="totalReparacionesAdicionales">
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
                    <a
                      href={"/reparacion_adicional/" + dataForm.id}
                      className="btn btn-warning form-control"
                    >
                      LISTA DE REPARACIONES ADICIONALES
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </a>
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
  );
};
