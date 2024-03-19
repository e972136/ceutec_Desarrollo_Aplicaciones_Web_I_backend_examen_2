import { db } from '../db/conn.js';

const getAseguradora = async (req, res)=>{
    

    const sql = `select * from aseguradora`;
    const result = await db.query(sql);

    res.json(result);

};


const postAseguradora = async (req, res)=>{
    const {nombre} = req.body;

    const params = [nombre];

    const sql = `insert into aseguradora(nombre) values ($1) returning * `;
    const result = await db.query(sql,params);

    res.json(result);

};



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