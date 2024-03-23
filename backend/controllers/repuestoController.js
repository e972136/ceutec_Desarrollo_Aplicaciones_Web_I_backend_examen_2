import { db } from '../db/conn.js';

const getRepuesto = async (req, res)=>{
    

    const sql = `select  * from repuesto`;
    const resultRepuesto = await db.query(sql);

    res.json(resultRepuesto);
};

const getRepuestosPorEstimacion= async (req, res)=>{

    const {estimacion_id} = req.params;
    

    const sql = `select  * 
    from repuesto 
    where repuesto.estimacion_id = ${estimacion_id}
    order by id`;
    const resultRepuesto = await db.query(sql);

    res.json(resultRepuesto);
};

const getRespuestoIndividual = async (req, res) => {
    const { id } = req.params;

    const sql = `select * from repuesto where id = ${id}`;

    const resultadoRepuesto = await db.query(sql);


    res.json(resultadoRepuesto[0]) ;


}

const postRepuesto = async (req, res)=>{

    const {estimacion_id,descripcion,precio}=req.body;
    

    const params =[
        estimacion_id,descripcion,precio
    ];


    const sql = `INSERT INTO repuesto(estimacion_id,descripcion,precio)
    VALUES ($1,$2,$3) returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};


const putRepuesto = async (req, res)=>{
    const {estimacion_id,descripcion,precio}=req.body;
    const {id} = req.params;

    const params =[
        estimacion_id,descripcion,precio,
        id
    ]; 

    const sql = `update repuesto 
                    set 
                    estimacion_id = $1,
                    descripcion = $2,
                    precio = $3                  
                    where id = $4 returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};

const delRepuesto = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from repuesto
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postRepuesto,
    getRepuesto, 
    getRepuestosPorEstimacion,   
    getRespuestoIndividual,
    putRepuesto,
    delRepuesto
};