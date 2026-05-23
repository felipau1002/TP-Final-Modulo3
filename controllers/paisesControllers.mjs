import paisesRepository from '../repository/paisesRepository.mjs'
import { consumirAPIPaises, obtenerTodosLosPaises, crearPais, editarPais, eliminarPais, buscarPais } from '../services/paisServices.mjs'


export async function cargarPaisesController(req, res) {
    try {
        const paisesAPI = await consumirAPIPaises();

        await paisesRepository.guardarPaises(paisesAPI);

        res.redirect('/api/paises');
    }   catch(error) {
        res.status(500).send({mensaje: 'Paises no cargados', error: error.message});
    }
}

export async function obtenerPaisesController(req, res) {
    try{
        const paises = await obtenerTodosLosPaises();

        res.render('dashboard', { paises });
    }   catch(error) {
        res.status(500).send({mensaje: 'Paises no encontrados', error: error.message});
    }
}


export async function crearPaisController(req, res) {
    try {
        const paisNuevo = await crearPais(req.body);

        res.redirect('/api/paises');
    }   catch(error) {
        res.status(500).send({mensaje: 'Pais no creado', error: error.message});
    }
}


export async function editarPaisController(req, res) {
    try {
        const { id } = req.params;
        const nuevosDatos = req.body;
        const paisEditado = await editarPais(id, nuevosDatos);
        if(!paisEditado) {
            return res.status(404).json({ mensaje: 'Pais no encontrado' });
        }

        res.redirect('/api/paises');
    }   catch(error) {
        res.status(500).send({mensaje: 'Pais no editado', error: error.message});
    }
}


export async function eliminarPaisController(req, res) {
    try {
        const { id } = req.params;
        const paisEliminado = await eliminarPais(id);
        if(!paisEliminado) {
            return res.status(404).json({ mensaje: 'Pais no encontrado' });
        }

        res.redirect('/api/paises');
    }   catch(error) {
        res.status(500).send({mensaje: 'Pais no eliminado', error: error.message});
    }
}



export async function buscarPaisController(req, res) {
    try {
        const { id } = req.params;
        const pais = await buscarPais(id);
        if(!pais) {
            return res.status(404).json({ mensaje: 'Pais no encontrado' });
        }

        res.render('editarPais', { pais });
    }   catch(error) {
        res.status(500).send({mensaje: 'Pais no eliminado', error: error.message});
    }
}