
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ReparacionAdicionalAgregar } from "./ReparacionAdicionalAgregar";

export const ReparacionAdicional = () => {

  const navigate = useNavigate();

  const [contadorDeBorrar, setContadorDeBorrar] = useState(0);

  const [dataMuro, setDataMuro] = useState([]);

  const { id } = useParams();

  const getDatos = async () => {
    const url = `http://localhost:9090/api/reparacion-adicional/${id}`;
    const response = await axios.get(url);
    const datos = (await response).data;
    console.log(datos);
    setDataMuro(datos);
  };

  const agregarReparacionHandler = () => {
    navigate(`/reparaciones/agregar/${id}`);
  };


  const borraPublicacion = async (idPost) => {

    const url = `http://localhost:9090/api/reparacion-adicional/${idPost}`;
    const response = await axios.delete(url);
    const datos = (await response).data;

    setContadorDeBorrar(contadorDeBorrar + 1);
    console.log(contadorDeBorrar);

  }

  const editarPublicacion = (idPublcacion) => {

    navigate(`/reparacion_adicional/editar/${id}/${idPublcacion}`);

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
                <h3 className="text-center">Reparaciones Adicionales</h3>
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
                <ReparacionAdicionalAgregar />
              </div>

              <div className="card-body">

                <div className="col-12">
                  <fieldset>
                    <table className="table table-dark">
                      <thead>
                        <tr>
                          <th >id</th>
                          <th >Detalle</th>
                          <th >Precio</th>
                          <th >Tipo</th>
                          <th >Accion</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataMuro.map((item) => (
                          <tr>
                            <td className="col-1">{item.id}</td>
                            <td className="col-6">
                              {item.reparacion_adicional_detalle}
                            </td>
                            <td className="col-2">{item.valor_reparacion} </td>
                            <td className="col-1">{item.tipo} </td>                            
                            <td className="col-2">
                              <button onClick={() => borraPublicacion(item.id)} className="btn btn-danger mx-2" >Borrar</button>
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
