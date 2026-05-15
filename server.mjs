import express from 'express';
import dns from 'dns';
import { connectDB } from './config/dbConfig.mjs';
import { obtenerPaisesController } from './controllers/paisesControllers.mjs'


dns.setServers(['8.8.8.8', '1.1.1.1']);


const app = express();
const PORT = 3000;


app.use(express.json());

app.set('view engine', 'ejs');


connectDB();




app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});