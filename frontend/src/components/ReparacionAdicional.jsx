
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const ReparacionAdicional = () => {
    const [dataMuro, setDataMuro] = useState([]);

    const { id } = useParams();
  
    const getDatos = async () => {
      const url = `http://localhost:9090/api/reparacion-adicional/${id}`;
      const response = await axios.get(url);
      const datos = (await response).data;
      console.log(datos);
      setDataMuro(datos);
    };
  
    useEffect(() => {
      getDatos();
    }, []);
  
    return (
      <>
        <div className="container">
          <a href={"/estimaciones/editar/"+id}
           className="btn btn-primary">
            Regresar
          </a>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h3 className="text-center">Reparaciones</h3>
                </div>
  
                <div className="card-body">
                  <form method="POST" className="row">
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
  
                    <div className="col-3 mt-1">
                      <button
                        type="submit"
                        className="btn btn-success form-control"
                      >
                        Guardar
                        <i className="fa fa-plus-square " aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="col-3 mt-1">
                      <input
                        type="reset"
                        id="resetButton"
                        className="btn btn-danger form-control"
                        name="reset"
                      />
                    </div>
                    <div className="col-3 mt-1">
                      <a href="/" className="btn btn-warning form-control">
                        Agregar
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="col-3"></div>
  
                    <div className="col-12">
                      <fieldset>
                        <table>
                          <thead>
                            <tr>
                              <th className="col-2">id</th>
                              <th className="col-6">Descripcion</th>
                              <th className="col-2">Precio</th>
                              <th className="col-2">Tipo</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dataMuro.map((item) => (
                              <tr>
                                <td className="col-2">{item.id}</td>
                                <td className="col-6">
                                  {item.reparacion_adicional_detalle}
                                </td>
                                <td className="col-2">{item.valor_reparacion} </td>
                                <td className="col-2">{item.tipo} </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </fieldset>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
