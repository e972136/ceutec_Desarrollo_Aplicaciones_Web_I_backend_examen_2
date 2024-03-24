//rafc para crear nuevo
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Aseguradoras } from './Aseguradoras'

export const AseguradorasRegistro = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        nombre: "",
        imagen: ""
    });

    const onChangeHandler = () => {
        const { name, value } = event.target;

        if (name === "imagen") {
            const img = event.target.files[0];
            setDataForm({ ...dataForm, [name]: img });
            return;
        }
        setDataForm({ ...dataForm, [name]: value });
        console.log(dataForm);
    };

    const [crearAseguradora, setCrearAseguradora] = useState("");

    const submitHandler = async () => {
        console.log("inicia");
        const url = 'http://localhost:9090/api/aseguradora';
        event.preventDefault();


        const datosFormulario = new FormData();
        
        datosFormulario.append( "nombre" , dataForm.nombre);
        datosFormulario.append( "imagen" , dataForm.imagen);
        
        try {
            const result = await axios.post(url, datosFormulario);
            const resultData = (await result).data;
            navigate('/aseguradoras')
        } catch (err) {
            console.log("murio");
            setCrearAseguradora("Error Al Crear");
        }
        


    }


    return (
        <>
            <Aseguradoras />
            <div className='container mt-5' >
                <form onSubmit={submitHandler}>
                    <legend>Registro de Aseguradoras</legend>
                    <fieldset>
                        <div className="form-group">
                            <label className="col-sm-2 col-form-label">Aseguradora</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    name="nombre"
                                    onChange={onChangeHandler}
                                />
                            </div>
                        </div>


                        <div className="form-group">
                            <label className="form-label">Logotipo</label>
                            <input
                                className="form-control "
                                type="file"
                                name="imagen"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 btn-lg">Crear Aseguradora</button>
                    </fieldset>
                </form>
                <div> {crearAseguradora} </div>
            </div>
        </>
    )
}
