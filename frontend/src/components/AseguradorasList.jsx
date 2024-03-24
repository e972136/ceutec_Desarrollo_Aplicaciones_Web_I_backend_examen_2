//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Aseguradoras } from './Aseguradoras'


export const AseguradorasList = () => {

    const [dataMuro, setDataMuro] = useState([]);

    const navigate = useNavigate();

    const getDatos = async () => {
        const url = "http://localhost:9090/api/aseguradora";
        const response = await axios.get(url);
        const datos = (await response).data;
        console.log(datos);
        setDataMuro(datos);
    };

    // siempre se ejecuta cada vez que se renderiza el componente
    useEffect(() => {
        getDatos();
    }, []);

    const crearAseguradora = () => {
        console.log("aha");
        navigate(`/aseguradoras/registro`);
    }

    const editarAseguradora = (idAseguradora) => {
        navigate(`/aseguradoras/actualiza/${idAseguradora}`);
    }

    return (
        <>
            <Aseguradoras />
            <div className="container-fluid">
                <legend>Aseguradoras</legend>
                <div className="row">
                    <button
                        onClick={() => crearAseguradora()}
                        className="btn btn-success  ml-3 btn-lg"
                    >
                        Agregar Aseguradora <i className="fa fa-plus-square" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="row">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Logo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataMuro.map(item => (
                                    <tr>
                                        <td key={item.id}>{item.id}</td>
                                        <td >{item.nombre}</td>
                                        <td>
                                            <img src={`data:${item.mime_type};base64,${item.imagen}`} style={{ height: '150px' }} />
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => editarAseguradora(item.id)}
                                                className="btn btn-warning mx-2"
                                            >
                                                {item.nombre_archivo}
                                            </button>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
