//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EstimacionesListado = () => {
  const [dataMuro, setDataMuro] = useState([]);  

  const navigate = useNavigate();

  const [contadorDeBorrar, setContadorDeBorrar] = useState(0);

  const getDatos = async () => {
    const url = "http://localhost:9090/api/estimacion";
    const response = await axios.get(url);
    const datos = (await response).data;
    console.log(datos);
    setDataMuro(datos);
  };

  const editarPublicacion = (idPublcacion) => {
    navigate(`/estimaciones/editar/${idPublcacion}`);
  };


  
  const crearEstimacionHandler = async () => {

    const url = "http://localhost:9090/api/estimacion";

    event.preventDefault();

    const data = {
      asegurado: "",
      estimado_por: "",
      fecha_evaluacion: "2024-01-01",
      aseguradora_id:1,
      placa: "",
      marca: "",
      modelo: "",
      color: "",
      anio_vehiculo: "",
      vin_o_serie: "",
      obs: "",    
    };
    

    const result = await axios.post(url, data);
    const resultData = result.data;
    const obtenido = resultData[0];        

    navigate(`/estimaciones/editar/${obtenido.id}`);

  };

  // siempre se ejecuta cada vez que se renderiza el componente
  useEffect(() => {
    getDatos();
  }, [contadorDeBorrar]);

  return (
    <>
      <div className="container-fluid">
        <h1>Estimaciones</h1>
        <form action="" method="get" autoComplete="off">
          <div className="input-group mb-3">
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon1"
            >
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              name="busqueda"
              className="form-control"
              placeholder="Buscar"
            />
          </div>
        </form>

        <a href="/estimaciones/crear" className="btn btn-success ">
          Agregar Estimacion href{" "}
          <i className="fa fa-plus-square" aria-hidden="true"></i>
        </a>

        <button
          onClick={crearEstimacionHandler}
          className="btn btn-success"
          type="button"
        >
          Agregar Estimacion handler
          <i className="fa fa-plus-square" aria-hidden="true"></i>
        </button>

        <table className="table table-dark table-striped">
          <thead>
            <tr className="bg-dark text-white">
              <th className="col-1">Est</th>
              <th className="col-1">Placa</th>
              <th className="col-3">Asegurado</th>
              <th className="col-3">Estimado por</th>
              <th className="col-2">Fecha</th>
              <th className="col-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataMuro.map((item) => (
              <tr>
                <td className="col-1">{item.id}</td>
                <td className="col-1">{item.placa}</td>
                <td className="col-2">{item.asegurado}</td>
                <td className="col-3">{item.estimado_por}</td>
                <td className="col-2">{item.fecha_evaluacion}</td>
                <td className="col-1">
                  <a
                    href={"/estimaciones/editar/" + item.id}
                    className="btn btn-warning"
                  >
                    Editar/link
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </a>
                </td>
                <td className="col-1">
                  <button
                    onClick={() => editarPublicacion(item.id)}
                    className="btn btn-warning mx-2"
                  >
                    Editar/b
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
