import express from 'express';
import { aseguradora } from './routes/apiAseguradora.js';
import { usuario } from './routes/apiUsuario.js';
import { estimacion } from './routes/apiEstimacion.js';
import { reparacion } from './routes/apiReparacion.js';
import { reparacionAdicional } from './routes/apiReparacionAdicional.js';
import { repuesto } from './routes/apiRepuesto.js';

import cors from 'cors';

const app = express();

const port = 9090;


//middlewares
app.use(express.json());

const corsOptions = {
    origin : 'http://localhost:5173', 
    credentials : true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.use(cors(corsOptions));

//Rutas
app.use("/api/aseguradora",aseguradora);
app.use("/api/usuario",usuario);
app.use("/api/estimacion",estimacion);
app.use("/api/reparacion",reparacion);
app.use("/api/reparacion-adicional",reparacionAdicional);
app.use("/api/repuesto",repuesto); 


app.listen(port,()=>{
    console.log(`Se escucha en ${port}`);
});