import { db } from '../db/conn.js';

const postUsuario = async (req, res)=>{
    const {nombre} = req.body;

    const params = [nombre];

    const sql = `insert into aseguradora(nombre) values ($1) returning * `;
    const result = await db.query(sql,params);

    res.json(result);

};

const validaUsuario = async (req, res) => {
    
    const {nombre,clave} = req.params;  
    
    const params =[
        nombre,clave
    ];


    const sql = `SELECT id from usuario where nombre = $1 and clave = $2`;

    const result = await db.query(sql, params);
    
    if (result.length === 0 ){
        res.status(404).json({mensaje: "Usuario y Contraseña no coinciden"})
    }else {
        res.json(result);
    }
    

}


export {
    postUsuario,
    validaUsuario
};