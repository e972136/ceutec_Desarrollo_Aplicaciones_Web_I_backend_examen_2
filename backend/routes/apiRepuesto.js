import express from 'express';
import {
    postRepuesto,
    getRepuesto,
    getRepuestosPorEstimacion,    
    putRepuesto,
    getRespuestoIndividual,
    delRepuesto
} from "../controllers/repuestoController.js";


const repuesto = express();

repuesto.post('',postRepuesto);
repuesto.get('',getRepuesto);
repuesto.get('/:estimacion_id',getRepuestosPorEstimacion);
repuesto.get('/individual/:id',getRespuestoIndividual);
repuesto.put('/:id',putRepuesto);
repuesto.delete('/:id',delRepuesto);


export {repuesto};