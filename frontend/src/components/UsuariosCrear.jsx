//rafc para crear nuevo
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UsuariosMenu } from "./UsuariosMenu";

export const UsuariosCrear = () => {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    correo: "",
    contrasena: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
    console.log(dataForm);
  };

  const [inicioSesion, setInicioSesion] = useState("");

  const submitHandler = async () => {
    event.preventDefault();

    const url = `http://localhost:9090/api/usuario/auth/${dataForm.correo}/${dataForm.contrasena}`;

    try {
      const result = await axios.get(url);
      const resultData = (await result).data;
      const resultEstimacion = resultData[0];
      const id = resultEstimacion.id;
      console.log(id);
      navigate(`/historial/${id}`);
    } catch (err) {
      setInicioSesion("Error de Inicio de Sesion");
    }
  };

  return (
    <>
    <UsuariosMenu />
      <div className="container">
        <legend>Creacion de Usuarios</legend>
        <form onSubmit={submitHandler}>
          <fieldset>
            <div className="form-group">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="clave"
                onChange={onChangeHandler}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Foto Perfil</label>
              <input
                className="form-control "
                type="file"
                name="foto_perfil"
                onChange={onChangeHandler}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Crear Usuario
            </button>
          </fieldset>
        </form>
        <div> {inicioSesion} </div>
      </div>
    </>
  );
};
