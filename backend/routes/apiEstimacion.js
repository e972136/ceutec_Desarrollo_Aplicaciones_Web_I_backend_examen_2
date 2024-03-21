import express from 'express';
import {
    postEstimacion,
    getEstimacion,
    getEstimacionById,
    putEstimacion,
    delEstimacion
} from "../controllers/estimacionController.js";


const estimacion = express();

estimacion.post('',postEstimacion);
estimacion.get('',getEstimacion);
estimacion.get('/:id',getEstimacionById);
estimacion.put('/:id',putEstimacion);
estimacion.delete('/:id',delEstimacion);


export {estimacion};