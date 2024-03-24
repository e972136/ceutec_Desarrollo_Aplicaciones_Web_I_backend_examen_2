
import  Express  from "express";
import multer from "multer";

const aseguradora = Express();
const storage = multer.memoryStorage();
const upload = multer( {storage : storage} );


import {
    postAseguradora,
    getAseguradora,
    putAseguradora,
    actualizarLogotipo,
    delAseguradora
} from "../controllers/aseguradoraController.js";




aseguradora.post ('', upload.single('imagen'), postAseguradora)
aseguradora.get('',getAseguradora);
aseguradora.put('/:id',putAseguradora);
aseguradora.put('/:id',actualizarLogotipo);
aseguradora.delete('/:id',delAseguradora);


export { aseguradora };