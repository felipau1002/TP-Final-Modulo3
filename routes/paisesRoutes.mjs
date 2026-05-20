import express from 'express';
import { obtenerPaisesController, crearPaisController, editarPaisController, eliminarPaisController, buscarPaisController } from '../controllers/paisesControllers.mjs'
import { validacionNombre, validacionCapital, validacionBorders, validacionArea, validacionPopulation } from '../validations/paisValidations.mjs'
import { middlewareDeErrores } from '../middlewares/middlewareErrores.mjs'



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
    validacionNombre,
    validacionCapital,
    validacionBorders,
    validacionArea,
    validacionPopulation,
    middlewareDeErrores,
    crearPaisController
);



router.get('/paises/editar/:id', buscarPaisController);

router.put(
    '/paises/editar/:id',
    validacionNombre,
    validacionCapital,
    validacionBorders,
    validacionArea,
    validacionPopulation,
    middlewareDeErrores,
    editarPaisController
);



router.delete('/paises/:id', eliminarPaisController);



export default router;