import pg from 'pg-promise';
import dotenv from 'dotenv'
dotenv.config();

const pgp = pg();

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const database = process.env.DB_BASE;

const cnstr = `postgresql://${user}:${pass}@${host}:5432/${database}`;

const db = pgp(cnstr);

db.connect()
    .then(()=>{
        console.log("Conectado!");
    })
    .catch((err)=>{
        console.log(`Error de coneccion ${err}`)
    });

export { db };