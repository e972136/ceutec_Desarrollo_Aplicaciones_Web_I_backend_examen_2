import { db } from '../db/conn.js';

const postUsuario = async (req, res)=>{
    const {nombre,clave} = req.body;
    console.log(nombre);
    console.log(clave);
    const {
        buffer,
        mimetype,
        originalname
    } = req.file;
    const params = [nombre,clave,buffer,mimetype,originalname];    

    try{
        const sql = `insert into usuario(nombre,clave,imagen,mime_type,nombre_archivo) 
        values ($1,$2,$3,$4,$5) returning id,nombre,'Exito' mensaje `;
        const result = await db.query(sql,params);    
        res.json(result);
    }catch (err) {
        res.status(500).json({ mensaje: err.message });
    }

};

const obtenerUsuarios = async (req, res) => {
    const sql = `select  
        id,
        nombre,
        encode(imagen, 'base64') imagen,
        mime_type,
        nombre_archivo
    from usuario`;
    const resultRepuesto = await db.query(sql);

    res.json(resultRepuesto);
}

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
    validaUsuario,
    obtenerUsuarios
};