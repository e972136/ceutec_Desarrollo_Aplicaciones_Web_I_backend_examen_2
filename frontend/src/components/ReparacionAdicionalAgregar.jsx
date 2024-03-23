//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const ReparacionAdicionalAgregar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    estimacion_id: 0,
    reparacion_adicional_detalle: "",
    valor_reparacion: 0.0,
    tipo: "",
  });

  const onChangeHandler = () => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async () => {
    const url = "http://localhost:9090/api/reparacion-adicional";

    event.preventDefault();

    /*    const datosFormulario = new FormData();
    
        datosFormulario.append("estimacion_id", id);
        datosFormulario.append("detalle_reparacion", form.detalle_reparacion);
        datosFormulario.append("precio", form.precio);*/


    const data = {
      estimacion_id: id,
      reparacion_adicional_detalle: form.reparacion_adicional_detalle,
      valor_reparacion: form.valor_reparacion,
      tipo: form.tipo
    }


    console.log(data);

    const result = await axios.post(url, data);
    const resultData = (await result).data;
    console.log(resultData);
    //navigate(`/reparaciones/${id}`);
    window.location.reload(false);
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={submitHandler}>
          <fieldset>
            <legend>Reparacion Adicional</legend>
            <div className="row">
              <div className="col-5">
                <label className="form-label">Detalle Reparacion Adicional</label>

                <input
                  className="form-control"
                  type="text"
                  name="reparacion_adicional_detalle"
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-3">
                <label className="form-label">Precio</label>

                <input
                  className="form-control"
                  type="number"
                  step="0.01"
                  name="valor_reparacion"
                  onChange={onChangeHandler}
                />
              </div>

              <div className="col-2">
                <label className="form-label">Tipo</label>

                <select
                  className="custom-select"
                  name="tipo"
                  id="tipo"
                  onChange={onChangeHandler}
                >
                  <option value="Normal">Normal</option>
                  <option value="Mecanica">Mecanica</option>
                  <option value="Vidrio">Vidrio</option>
                </select>


                {/*

 <select className="form-select"
                                    name="activo" onChange={handlerChange}
                                    
                                >

                                    <option value={true}  >Si</option>
                                    <option value={false}>No</option>

                                </select>
*/}

                {/*<input
                    className="form-control"
                    type="text"
                    name="tipo"
                    onChange={onChangeHandler}
    />*/}
              </div>

              <button type="submit" className="btn btn-primary col-2">
                Agregar
              </button>
            </div>

          </fieldset>
        </form>
      </div>
    </>
  );
}
