import express from 'express';
import {
    postRepuesto,
    getRepuesto,
    getRepuestosPorEstimacion,    
    putRepuesto,
    delRepuesto
} from "../controllers/repuestoController.js";


const repuesto = express();

repuesto.post('',postRepuesto);
repuesto.get('',getRepuesto);
repuesto.get('/:estimacion_id',getRepuestosPorEstimacion);
repuesto.put('/:id',putRepuesto);
repuesto.delete('/:id',delRepuesto);


export {repuesto};