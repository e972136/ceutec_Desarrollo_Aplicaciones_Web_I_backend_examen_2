//rafc para crear nuevo
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Aseguradoras } from './Aseguradoras'
import { UsuariosMenu } from "./UsuariosMenu";


export const UsuariosListar = () => {

    const [dataMuro, setDataMuro] = useState([]);
    const navigate = useNavigate();

    const getDatos = async () => {
        const url = "http://localhost:9090/api/usuario";
        const response = await axios.get(url);
        const datos = (await response).data;
        console.log(datos);
        setDataMuro(datos);
    };

    // siempre se ejecuta cada vez que se renderiza el componente
    useEffect(() => {
        getDatos();
    }, []);

    return (
        <>
            <Aseguradoras />
            <UsuariosMenu />
            <div className="container-fluid">
                <legend>Usuarios</legend>
                <div className="row">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Perfil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataMuro.map(item => (
                                    <tr>
                                        <td key={item.id} className="col-1 btn-lg">{item.id}</td>
                                        <td className="col-5 btn-lg">{item.nombre}</td>
                                        <td className="col-6">
                                            <img src={`data:${item.mime_type};base64,${item.imagen}`} style={{ height: '200px' }} />
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
