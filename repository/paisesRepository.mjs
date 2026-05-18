import paisHispano from '../models/pais.mjs';


class paisesRepository {

    static async guardarPaises(paises) {
        return await paisHispano.insertMany(paises, { ordered: false });
    }

    static async agregarPais(pais) {
        const paisNuevo = new paisHispano(pais);
        return await paisNuevo.save();
    }

    static async editarPais(id, paisEditado) {
        return await paisHispano.findByIdAndUpdate(id, paisEditado, { new: true });
    }

    static async eliminarPais(id) {
        return paisHispano.findByIdAndDelete(id);
    }

    static async buscarPais(id) {
        return await paisHispano.findById(id);
    }
}


export default paisesRepository;