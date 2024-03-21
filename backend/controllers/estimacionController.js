import { db } from '../db/conn.js';

const postEstimacion = async (req, res)=>{

    const {asegurado,estimado_por,fecha_evaluacion,aseguradora_id,placa,marca,modelo,color,anio_vehiculo,vin_o_serie,obs}=req.body;
    

    const params =[
        asegurado,estimado_por,fecha_evaluacion,aseguradora_id,placa,marca,modelo,color,anio_vehiculo,vin_o_serie,obs
    ];


    const sql = `INSERT INTO estimacion(asegurado,estimado_por,fecha_evaluacion,aseguradora_id,placa,marca,modelo,color,anio_vehiculo,vin_o_serie,obs)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};

const getEstimacionById = async (req, res) => {
    const {id} = req.params;
    const params =[        
        id
    ]; 
    const sql = `select  * from estimacion where id = $1`;
    const resultEstimacionSql = await db.query(sql,params);

    const resultEstimacion = resultEstimacionSql[0];    
    const asegurado = resultEstimacion.asegurado;
    const estimado_por= resultEstimacion.estimado_por;
    const fecha_evaluacion= resultEstimacion.fecha_evaluacion;
    const aseguradora_id= resultEstimacion.aseguradora_id;
    const placa= resultEstimacion.placa;
    const marca= resultEstimacion.marca;
    const modelo= resultEstimacion.modelo;
    const color= resultEstimacion.color;
    const anio_vehiculo= resultEstimacion.anio_vehiculo;
    const vin_o_serie= resultEstimacion.vin_o_serie;
    const obs= resultEstimacion.obs;
    const km=100;
    const implementado_por = resultEstimacion.estimado_por;


    const sqlReparacion = `select * from reparacion where reparacion.estimacion_id = ${id}`;
    const reparacion = await db.query(sqlReparacion);

    const sqlTotalReparaciones = `select sum(precio) as t from reparacion where reparacion.estimacion_id = ${id}`;
    const totalReparacionesResponse = await db.query(sqlTotalReparaciones);
    const totalReparacionesResult = totalReparacionesResponse[0];
    const total_Reparaciones = totalReparacionesResult.t;


    const sqlReparacion_adicional = `select * from reparacion_adicional where reparacion_adicional.estimacion_id = ${id}`;
    const reparacion_adicional = await db.query(sqlReparacion_adicional);

    const sqlRepuesto = `select * from repuesto where repuesto.estimacion_id = ${id}`;
    const repuesto = await db.query(sqlRepuesto);

    const elemento = {
        id,
        asegurado,
        estimado_por,
        fecha_evaluacion,
        aseguradora_id,
        placa,
        marca,
        modelo,
        color,
        anio_vehiculo,
        vin_o_serie,
        obs,
        reparacion,
        total_Reparaciones,
        reparacion_adicional,
        repuesto,
        km,
        implementado_por
    };


    res.json(elemento);

}


const getEstimacion = async (req, res)=>{
    

    const sql = `select  aseguradora.nombre as nombre_aseguradora, estimacion.* from estimacion
                inner join aseguradora on aseguradora.id = estimacion.aseguradora_id
                order by estimacion.id desc`;
    const resultEstimacion = await db.query(sql);

    res.json(resultEstimacion);

};

const putEstimacion = async (req, res)=>{
    const {asegurado,estimado_por,fecha_evaluacion,aseguradora_id,placa,marca,modelo,color,anio_vehiculo,vin_o_serie,obs}=req.body;
    const {id} = req.params;

    const params =[
        asegurado,estimado_por,fecha_evaluacion,aseguradora_id,placa,marca,modelo,color,anio_vehiculo,vin_o_serie,obs,
        id
    ];

    const sql = `update estimacion 
                    set 
                    asegurado = $1,
                    estimado_por = $2,
                    fecha_evaluacion = $3,
                    aseguradora_id = $4,
                    placa = $5,
                    marca = $6,
                    modelo = $7,
                    color = $8,
                    anio_vehiculo = $9,
                    vin_o_serie = $10,
                    obs = $11                    
                    where id = $12 returning *`;

    console.log(sql);

    const result = await db.query(sql,params);

    res.json(result);

};

const delEstimacion = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from estimacion
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postEstimacion,
    getEstimacion,
    getEstimacionById,
    putEstimacion,
    delEstimacion
};