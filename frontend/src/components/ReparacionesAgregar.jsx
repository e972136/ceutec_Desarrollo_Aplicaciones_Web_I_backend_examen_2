//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const ReparacionesAgregar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    estimacion_id: 0,
    detalle_reparacion: "",
    precio: 0.0,
  });

  const onChangeHandler = () => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async () => {
    const url = "http://localhost:9090/api/reparacion";

    event.preventDefault();

/*    const datosFormulario = new FormData();

    datosFormulario.append("estimacion_id", id);
    datosFormulario.append("detalle_reparacion", form.detalle_reparacion);
    datosFormulario.append("precio", form.precio);*/


    const data = {            
        estimacion_id: id,
        detalle_reparacion: form.detalle_reparacion,
        precio: form.precio        
    }


    console.log(data);

    const result = await axios.post(url, data);
    const resultData = (await result).data;
    console.log(resultData);
    navigate(`/reparaciones/${id}`);
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={submitHandler}>
          <fieldset>
            <legend>Reparacion</legend>

            <div className="form-group">
              <label className="form-label">Detalle Reparacion</label>

              <input
                className="form-control"
                type="text"
                name="detalle_reparacion"
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Precio</label>

              <input
                className="form-control"
                type="number"
                step="0.01"
                name="precio"
                onChange={onChangeHandler}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Agregar Reparacion
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};
