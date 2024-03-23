import express from 'express';
import {
    postReparacion,
    getReparacion,
    getReparacionesPorEstimacion,    
    getReparacionesIndividual,
    putReparacion,
    delReparacion
} from "../controllers/reparacionController.js";


const reparacion = express();

reparacion.post('',postReparacion);
reparacion.get('',getReparacion);
reparacion.get('/:estimacion_id',getReparacionesPorEstimacion);
reparacion.get('/individual/:id',getReparacionesIndividual);
reparacion.put('/:id',putReparacion);
reparacion.delete('/:id',delReparacion);


export {reparacion};