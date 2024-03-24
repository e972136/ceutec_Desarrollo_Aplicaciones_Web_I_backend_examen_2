import { db } from '../db/conn.js';

const getAseguradora = async (req, res)=>{
    

    const sql = `select 
        id,
        nombre,
        encode(imagen, 'base64') imagen,
        mime_type,
        nombre_archivo
     from 
     aseguradora 
     order by nombre`;
    const result = await db.query(sql);

    res.json(result);

};


const postAseguradora = async (req, res)=>{

    try{
        const {nombre} = req.body;
        const {
            buffer,
            mimetype,
            originalname
        } = req.file;

        const params = [nombre,buffer,mimetype,originalname];    
        const sql = `insert into aseguradora(nombre,imagen, mime_type,nombre_archivo) 
        values ($1,$2,$3,$4) returning  id, nombre, 'Insercion Exitosa' mensaje`;
        const result = await db.query(sql,params);    
        res.json(result);        
    }catch (err) {
        res.status(500).json({ mensaje: err.message });
    }



};

/*
const postPublicacion = async (req, res) => {

    try {

        const {
            caption,
            nombre_usuario
        } = req.body;

        const {
            buffer,
            mimetype,
            originalname
        } = req.file;

        const params = [buffer, mimetype, originalname, caption, nombre_usuario];

        const sql = ` insert into tbl_publicacion 
                        (imagen, mime_type, nombre_archivo, caption, nombre_usuario  )
                        values 
                        ($1, $2, $3, $4, $5)
                      returning  id, nombre_usuario, 'Insercion Exitosa' mensaje `;

        const result = await (db.query(sql, params));


        res.json(result)

    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }



}

*/

const putAseguradora = async (req, res)=>{
    const {nombre}=req.body;
    const {id} = req.params;

    const params =[
        nombre,
        id
    ];

    const sql = `update aseguradora 
                    set nombre = $1 
                    where id = $2 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

const actualizarLogotipo = (req, res)=>{
    const {id} = req.params;
    const {logotipo}=req.body;
    
}

const delAseguradora = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from aseguradora
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postAseguradora,
    getAseguradora,
    putAseguradora,
    actualizarLogotipo,
    delAseguradora
};