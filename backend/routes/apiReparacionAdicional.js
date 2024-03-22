import express from 'express';
import {
    postReparacionAdicional,
    getReparacionAdicional,
    getReparacionesAdicionalesPorEstimacion,    
    putReparacionAdicional,
    delReparacionAdicional
} from "../controllers/reparacionAdicionalController.js";


const reparacionAdicional = express();

reparacionAdicional.post('',postReparacionAdicional);
reparacionAdicional.get('',getReparacionAdicional);
reparacionAdicional.get('/:estimacion_id',getReparacionesAdicionalesPorEstimacion);
reparacionAdicional.put('/:id',putReparacionAdicional);
reparacionAdicional.delete('/:id',delReparacionAdicional);


export {reparacionAdicional};