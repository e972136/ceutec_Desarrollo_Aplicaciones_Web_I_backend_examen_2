import express from 'express';
import multer from "multer";

const usuario = express();
const storage = multer.memoryStorage();
const upload = multer( {storage : storage} );

import {
    postUsuario,
    validaUsuario,
    obtenerUsuarios
} from "../controllers/usuarioController.js";




usuario.post('', upload.single('imagen'),postUsuario);
usuario.get('/auth/:nombre/:clave',validaUsuario);
usuario.get('/',obtenerUsuarios);


export {usuario};