//rafc para crear nuevo
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UsuariosMenu } from "./UsuariosMenu";

export const UsuariosCrear = () => {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    nombre: "",
    clave: "",
    foto_perfil: ""
  });

  const onChangeHandler = () => {
    const { name, value } = event.target;
    
    if (name === "foto_perfil") {

      const img = event.target.files[0];
      setDataForm({ ...dataForm, [name]: img });
      return;
      
   }
   setDataForm({ ...dataForm, [name]: value });
    console.log(dataForm);
  };

  const [crearUsuario, setCrearUsuario] = useState("");

  const submitHandler = async () => {
    const url = "http://localhost:4000/api/publicacion";    
    event.preventDefault();

    const datosFormulario = new FormData();
    
    datosFormulario.append( "nombre" , dataForm.nombre_usuario);
    datosFormulario.append( "clave" , dataForm.caption);
    datosFormulario.append( "foto_perfil" , dataForm.imagen);

    try{
      const result  = await axios.post(url, datosFormulario);
      const resultData = (await result).data;
      const resultEstimacion = resultData[0];  
      const id = resultEstimacion.id;
      console.log(id);      
      navigate('/')
    }catch (err) {
      setCrearUsuario("Error Al Crear");
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
        <div> {crearUsuario} </div>
      </div>
    </>
  );
};
