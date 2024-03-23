//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { RepuestosAgregar } from "./RepuestosAgregar";

export const Repuestos = () => {

  const navigate = useNavigate();

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

  const editarPublicacion = (idPublcacion) => {

    navigate(`/repuestos/editar/${id}/${idPublcacion}`);

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
                          <th>id</th>
                          <th>Descripcion</th>
                          <th>Precio</th>
                          <th>Accion</th>
                        </tr>
                      </thead>
                      <tbody>

                        {dataMuro.map((item) => (
                          <tr>
                            <td className="col-2">{item.id}</td>
                            <td className="col-5">{item.descripcion}</td>
                            <td className="col-3">{item.precio} </td>
                            <td className="col-2">
                              <button onClick={() => borraPublicacion(item.id)} className="btn btn-danger" >Borrar</button>
                              <button onClick={() => editarPublicacion(item.id)} className="btn btn-warning" >Editar</button>
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
