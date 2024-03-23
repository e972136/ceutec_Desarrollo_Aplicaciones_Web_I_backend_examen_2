import { db } from '../db/conn.js';

const getReparacion = async (req, res)=>{
    

    const sql = `select  * from reparacion`;
    const resultReparacion = await db.query(sql);

    res.json(resultReparacion);
};

const getReparacionesPorEstimacion= async (req, res)=>{

    const {estimacion_id} = req.params;
    

    const sql = `select  * 
    from reparacion 
    where reparacion.estimacion_id = ${estimacion_id}
    order by reparacion.id`;

    const resultReparacion = await db.query(sql);

    res.json(resultReparacion);
};


const getReparacionesIndividual = async (req, res) => {
    const { id } = req.params;

    const sql = `select * from reparacion where id = ${id}`;

    const resultadoRepuesto = await db.query(sql);


    res.json(resultadoRepuesto[0]) ;


}

const postReparacion = async (req, res)=>{

    const {estimacion_id,detalle_reparacion,precio}=req.body;
    console.log(estimacion_id);
    console.log(detalle_reparacion);
    console.log(precio);


    const params =[
        estimacion_id,detalle_reparacion,precio
    ];


    const sql = `INSERT INTO reparacion(estimacion_id,detalle_reparacion,precio)
    VALUES ($1,$2,$3) returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};


const putReparacion = async (req, res)=>{
    const {estimacion_id,detalle_reparacion,precio}=req.body;
    const {id} = req.params;

    const params =[
        estimacion_id,detalle_reparacion,precio,
        id
    ]; 

    const sql = `update reparacion 
                    set 
                    estimacion_id = $1,
                    detalle_reparacion = $2,
                    precio = $3                  
                    where id = $4 returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};

const delReparacion = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from reparacion
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postReparacion,
    getReparacion, 
    getReparacionesPorEstimacion,   
    putReparacion,
    getReparacionesIndividual,
    delReparacion
};