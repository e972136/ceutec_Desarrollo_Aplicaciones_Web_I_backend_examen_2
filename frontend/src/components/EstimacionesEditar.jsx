//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";


export const EstimacionesEditar = () => {
  const navigate = useNavigate();

  const regresarHandler = () => {
    navigate("/estimaciones");
  };

  const { id } = useParams();

  const [dataForm, setDataForm] = useState({
    id: "1",
    asegurado: "",
    estimado_por: "",
    fecha_evaluacion: "",
    fecha_txt: "",
    aseguradora_id: "2",
    placa: "",
    marca: "",
    modelo: "",
    color: "",
    anio_vehiculo: "",
    vin_o_serie: "",
    obs: "",
    km: "",
    implementado_por: "",
    total_Reparaciones: 0.0,
    total_repuestos: 0.0,
    total_reparacion_adicional: 0.0,
  });

  const [aseguradoras, setAseguradoras] = useState([]);

  const handlerChange = (event) => {

    const { name, value } = event.target

    setDataForm({ ...dataForm, [name]: value });
    setGuardarEstimacion("...");
  }

  const getDatos = async () => {
    const url = `http://localhost:9090/api/estimacion/${id}`;
    const response = await axios.get(url);
    const datos = (await response).data;
    console.log(datos);
    setDataForm(datos);
  };

  const getAseguradoras = async () => {

    const url = `http://localhost:9090/api/aseguradora`;
    const response = await axios.get(url);
    const datos = (await response).data;
    console.log(datos);
    setAseguradoras(datos);
  }

  const [guardarEstimacion, setGuardarEstimacion] = useState("");

  const submitHandler = async () => {
    const url = `http://localhost:9090/api/estimacion/${id}`;
    event.preventDefault();


    const datosFormulario =
    {
      asegurado: dataForm.asegurado,
      estimado_por: dataForm.estimado_por,
      fecha_evaluacion: dataForm.fecha_txt,
      aseguradora_id: dataForm.aseguradora_id,
      placa: dataForm.placa,
      marca: dataForm.marca,
      modelo: dataForm.modelo,
      color: dataForm.color,
      anio_vehiculo: dataForm.anio_vehiculo,
      vin_o_serie: dataForm.vin_o_serie,
      obs: dataForm.obs
    };

    /*
    const datosFormulario = new FormData();
    datosFormulario.append("asegurado","y");
     datosFormulario.append("estimado_por", "y");
     datosFormulario.append("fecha_evaluacion", "2024-01-01");
     datosFormulario.append("aseguradora_id", 1);
     datosFormulario.append("placa", "y");
     datosFormulario.append("marca", "y");
     datosFormulario.append("modelo", "y");
     datosFormulario.append("color", "y");
     datosFormulario.append("anio_vehiculo", "y");
     datosFormulario.append("vin_o_serie", "y");
     datosFormulario.append("obs", "x");*/

    console.log(datosFormulario);
    try {
      const result = await axios.put(url, datosFormulario);
      const resultData = (await result).data;
      const resultEstimacion = resultData[0];
      const id = resultEstimacion.id;
      console.log(id);
      setGuardarEstimacion("");
      //  navigate(`/estimaciones`);
    } catch (err) {
      setGuardarEstimacion("Error Al guardar!");
    }

  }




  useEffect(() => {
    getDatos();
    getAseguradoras();
  }, []);

  return (
    <>
      <div className="container">
        <button
          onClick={regresarHandler}
          className="btn btn-primary  ml-3 btn-lg"
          type="button"
        >
          Regresar
        </button>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3>EDITAR ESTIMACION</h3>
                <div> {guardarEstimacion} </div>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler} className="row">

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
                      name="fecha_txt"
                      onChange={handlerChange}
                      value={dataForm.fecha_txt}
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
                      name="asegurado"
                      onChange={handlerChange}
                      value={dataForm.asegurado}
                    />
                  </div>


                  <div className="col-6">
                    <label htmlFor="aseguradora">
                      <b>Aseguradora</b>
                    </label>
                    <select
                      className="custom-select"
                      name="aseguradora_id"
                      id="aseguradora"
                      value={dataForm.aseguradora_id}
                      onChange={handlerChange}
                    >
                      {
                        aseguradoras.map((item) => (
                          <option key={item.id} value={item.id}>{item.nombre}</option>
                        ))
                      }
                    </select>

                    {/*                    <input
                      type="text"
                      className="form-control"
                      id="aseguradora"
                      autoComplete="on"
                      onChange={handlerChange}
                      name="aseguradora_id"
                      value={dataForm.aseguradora_id}
                    />
  */}
                  </div>


                  <div className="col-6">
                    <label htmlFor="estimadoPor">
                      <b>Estimado Por</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="estimadoPor"
                      onChange={handlerChange}
                      name="estimado_por"
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
                      onChange={handlerChange}
                      name="placa"
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
                      onChange={handlerChange}
                      name="marca"
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
                      onChange={handlerChange}
                      name="modelo"
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
                      onChange={handlerChange}
                      name="anio_vehiculo"
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
                      onChange={handlerChange}
                      name="color"
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
                      onChange={handlerChange}
                      name="km"
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
                      onChange={handlerChange}
                      name="vin_o_serie"
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
                      value={dataForm.total_repuestos}
                      disabled
                    />
                  </div>
                  <div className="col-6  mt-1">

                    <Link to={"/repuestos/" + dataForm.id} className="btn btn-warning form-control">
                      LISTA DE REPUESTOS NECESARIOS A REEMPLAZAR <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </Link>


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
                    <Link to={"/reparaciones/" + dataForm.id} className="btn btn-warning form-control">
                      LISTA DE REPARACIONES <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </Link>
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
                      value={dataForm.total_reparacion_adicional}
                      disabled
                    />
                  </div>
                  <div className="col-6  mt-1 ">

                    <Link to={"/reparacion_adicional/" + dataForm.id} className="btn btn-warning form-control">
                      LISTA DE REPARACIONES ADICIONALES <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </Link>

                  </div>

                  <div className="col-12 mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary form-control btn-lg"
                    >
                      Guardar Estimacion
                    </button>
                  </div>

                </form>
                <div> {guardarEstimacion} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
