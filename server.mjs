import express from 'express';
import dns from 'dns';
import { connectDB } from './config/dbConfig.mjs';
import router from './routes/paisesRoutes.mjs';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import methodOverride from 'method-override';

// Establece unos servidores predeterminados en caso de que haya un error a nivel global
dns.setServers(['8.8.8.8', '1.1.1.1']);


const app = express();
const PORT = 3000;


app.use(express.json());

// Establece EJS como el motor de vistas del servidor
app.set('view engine', 'ejs');

// Permite usar layouts predefinidos en las vistas
app.use(expressLayouts);
app.set('layout', 'layout');

// Permite detectar y usar los archivos estáticos de la carpeta public
app.use(express.static(path.resolve('./public')));

// Método necesario para enviar formularios HTML a la base de datos de mongoDB
app.use(express.urlencoded({ extended: true }));

// Método necesario para que el form HTML capte formularios PUT
app.use(methodOverride('_method'));


// Se conecta a la base de datos
connectDB();


app.use('/api', router);

app.use((req, res) => {
    res.status(404).send({mensaje: 'ruta no encontrada'});
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});