//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const Reparaciones = () => {
  const navigate = useNavigate();

  const [dataMuro, setDataMuro] = useState([]);

  const { id } = useParams();

  const getDatos = async () => {
    const url = `http://localhost:9090/api/reparacion/${id}`;
    const response = await axios.get(url);
    const datos = (await response).data;
    console.log(datos);
    setDataMuro(datos);
  };

  const agregarReparacionHandler = () => {        
    navigate(`/reparaciones/agregar/${id}`);
  };

  useEffect(() => {
    getDatos();
  }, []);

  return (
    <>
      <div className="container">
        <a href={"/estimaciones/editar/" + id} className="btn btn-primary">
          Regresar
        </a>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Reparaciones</h3>
              </div>

              <div className="card-body">
                <div className="col-1">
                  <label htmlFor="estimacion">
                    <b>Estimacion</b>
                  </label>
                </div>

                <div className="col-2">
                  <input
                    type="text"
                    className="form-control"
                    id="estimacion"
                    value={id}
                    readOnly
                  />
                </div>

                <div className="col-9"></div>

                <div className="col-6 mt-1">

                  <button
                       onClick={agregarReparacionHandler}
                       type="button"       
                    className="btn btn-success form-control"
                  >
                    Agregar <i className="fa fa-plus-square " aria-hidden="true"></i>
                  </button>
                </div>

                <div className="col-6"></div>

                <div className="col-12">
                  <fieldset>
                    <table>
                      <thead>
                        <tr>
                          <th className="col-2">id</th>
                          <th className="col-8">Descripcion</th>
                          <th className="col-2">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataMuro.map((item) => (
                          <tr>
                            <td className="col-2">{item.id}</td>
                            <td className="col-8">
                              {item.detalle_reparacion}{" "}
                            </td>
                            <td className="col-2">{item.precio} </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
