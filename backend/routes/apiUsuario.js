import express from 'express';
import {
    postUsuario,
    validaUsuario
} from "../controllers/usuarioController.js";


const usuario = express();

usuario.post('',postUsuario);
usuario.get('/auth/:nombre/:clave',validaUsuario);


export {usuario};