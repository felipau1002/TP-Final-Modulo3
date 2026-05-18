import express from 'express';
import { obtenerPaisesController, crearPaisController, editarPaisController, eliminarPaisController, buscarPaisController } from '../controllers/paisesControllers.mjs'


const router = express.Router();


router.get('/inicio', (req, res) => {
    res.render('inicio');
})



router.get('/paises', obtenerPaisesController);



router.get('/paises/crear', (req, res) => {
    res.render('crearPais');
})

router.post(
    '/paises/crear',
    // Aqui van las validaciones
    crearPaisController
);



router.get('/paises/editar/:id', buscarPaisController);

router.put(
    '/paises/editar/:id',
    // Aqui van las validaciones
    editarPaisController
);



router.delete('/paises/:id', eliminarPaisController);



export default router;