//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { RepuestosAgregar } from "./RepuestosAgregar";

export const Repuestos = () => {


  const [contadorDeBorrar, setContadorDeBorrar] = useState(0);

  const [dataMuro, setDataMuro] = useState([]);

  const { id } = useParams();

  const getDatos = async () => {
    const url = `http://localhost:9090/api/repuesto/${id}`;
    const response = await axios.get(url);
    const datos = (await response).data;
    console.log(datos);
    setDataMuro(datos);
  };

  const borraPublicacion = async (idPost) => {

    const url = `http://localhost:9090/api/repuesto/${idPost}`;
    const response = await axios.delete(url);
    const datos = (await response).data;

    setContadorDeBorrar(contadorDeBorrar + 1);
    console.log(contadorDeBorrar);

  }


  useEffect(() => {
    getDatos();
  }, [contadorDeBorrar]);

  return (
    <>

      <div className="container-fluid">
        <a href={"/estimaciones/editar/" + id} className="btn btn-primary">
          Regresar
        </a>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Repuestos</h3>
              </div>

              <div className="row">
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
              </div>

              <div className="row">
                <RepuestosAgregar />
              </div>

              <div className="card-body">

                <div className="col-12">
                  <fieldset>
                    <table className="table table-dark">
                      <thead>
                        <tr>
                          <th className="col-2">id</th>
                          <th className="col-7">Descripcion</th>
                          <th className="col-2">Precio</th>
                          <th className="col-1">Accion</th>
                        </tr>
                      </thead>
                      <tbody>

                        {dataMuro.map((item) => (
                          <tr>
                            <td className="col-2">{item.id}</td>
                            <td className="col-8">
                              {item.descripcion}
                            </td>
                            <td className="col-2">{item.precio} </td>
                            <td className="col-1">
                              <button onClick={() => borraPublicacion(item.id)} className="btn btn-danger mx-2" >Borrar</button>

                            </td>
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
}
