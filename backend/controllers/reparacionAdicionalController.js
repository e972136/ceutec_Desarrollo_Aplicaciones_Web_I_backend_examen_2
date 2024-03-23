import { db } from '../db/conn.js';

const getReparacionAdicional = async (req, res)=>{
    

    const sql = `select  * from reparacion_adicional`;
    const resultReparacion_adicional = await db.query(sql);

    res.json(resultReparacion_adicional);
};

const getReparacionesAdicionalesPorEstimacion= async (req, res)=>{

    const {estimacion_id} = req.params;
    

    const sql = `select  * 
    from reparacion_adicional 
    where reparacion_adicional.estimacion_id = ${estimacion_id}
    order by id`;
    const resultReparacion_adicional = await db.query(sql);

    res.json(resultReparacion_adicional);
};


const getReparacionesAdicionaleIndividual = async (req, res) => {
    const { id } = req.params;

    const sql = `select * from reparacion_adicional where id = ${id}`;

    const resultadoRepuesto = await db.query(sql);


    res.json(resultadoRepuesto[0]) ;


}

const postReparacionAdicional = async (req, res)=>{

    const {estimacion_id,reparacion_adicional_detalle,valor_reparacion,tipo}=req.body;
    

    const params =[
        estimacion_id,reparacion_adicional_detalle,valor_reparacion,tipo
    ];


    const sql = `INSERT INTO reparacion_adicional(estimacion_id,reparacion_adicional_detalle,valor_reparacion,tipo)
    VALUES ($1,$2,$3,$4) returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};


const putReparacionAdicional = async (req, res)=>{
    const {estimacion_id,reparacion_adicional_detalle,valor_reparacion,tipo}=req.body;
    const {id} = req.params;

    const params =[
        estimacion_id,reparacion_adicional_detalle,valor_reparacion,tipo,
        id
    ]; 

    const sql = `update reparacion_adicional 
                    set 
                    estimacion_id = $1,
                    reparacion_adicional_detalle = $2,
                    valor_reparacion = $3,
                    tipo = $4                  
                    where id = $5 returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};

const delReparacionAdicional = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from reparacion_adicional
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postReparacionAdicional,
    getReparacionAdicional, 
    getReparacionesAdicionalesPorEstimacion,   
    putReparacionAdicional,
    getReparacionesAdicionaleIndividual,
    delReparacionAdicional
};