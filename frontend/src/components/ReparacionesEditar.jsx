//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export const ReparacionesEditar = () => {    
    const navigate = useNavigate();
  
    const { id, idPublcacion } = useParams();

    const [form, setForm] = useState({
      estimacion_id: 0,
      detalle_reparacion: "",
      precio: 0.0,
    });
  
    const onChangeHandler = () => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };
  

    const getDatos = async () => {
        const url = `http://localhost:9090/api/reparacion/individual/${idPublcacion}`;
        const response = await axios.get(url);
        const datos = (await response).data;
        console.log(datos);
        setForm(datos);        
    }

    const submitHandler = async () => {
      const url = `http://localhost:9090/api/reparacion/${idPublcacion}`;
  
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
  
      const result = await axios.put(url, data);
      const resultData = (await result).data;
      console.log(resultData);
      navigate(`/reparaciones/${id}`);

    };
  
    useEffect(() => {
        getDatos();        
      }, []);


    return (
      <>
        <div className="container mt-5">
          <form onSubmit={submitHandler}>
            <fieldset>
              <legend>Reparacion</legend>
              <div className="row">
                <div className="col-6">
                  <label className="form-label">Detalle Reparacion</label>
  
                  <input
                    className="form-control"
                    type="text"
                    name="detalle_reparacion"
                    value={form.detalle_reparacion}
                    onChange={onChangeHandler}
                  />
                </div>
  
                <div className="col-3">
                  <label className="form-label">Precio</label>
  
                  <input
                    className="form-control"
                    type="number"
                    step="0.01"
                    name="precio"
                    value={form.precio}
                    onChange={onChangeHandler}
                  />
                </div>
  
                <button type="submit" className="btn btn-primary col-3">
                  Actualizar Reparacion
                </button>
              </div>
  
            </fieldset>
          </form>
        </div>
      </>
    );
}
