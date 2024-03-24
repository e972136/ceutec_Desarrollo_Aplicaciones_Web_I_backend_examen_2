import { useState } from "react";
import axios from 'axios';
//rafc para crear nuevo
import { Aseguradoras } from './Aseguradoras'

export const AseguradorasElimina = () => {
    const url = 'http://localhost:9090/api/aseguradora';

    const [id, setId] = useState();


    const idHandler = (event) => {

        const { name, value } = event.target;
        setId(value);

    }


    const submitHandler = async () => {

        event.preventDefault();

        const result = await axios.delete(url + "/" + id);
        const resultData = (await result).data;

        console.log(result);
        console.log(resultData);

    }


    return (
        <>
        <Aseguradoras/>
            <div className='container mt-5' >                
                <form onSubmit={submitHandler}>
                    <legend>Eliminacion de Aseguradoras</legend>
                    <fieldset>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Id</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    name="id"
                                    onChange={idHandler}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Borrar Aseguradora</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
