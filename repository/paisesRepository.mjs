import paisHispano from '../models/pais.mjs';


class paisesRepository {

    static async guardarPaises(paises) {    // VERIFICA SI CADA PAIS EXISTE, SI NO EXISTE LO CREA
        for(const pais of paises) {
            const paisExistente = await paisHispano.findOne({ name: pais.name });

            if(!paisExistente) {
                await paisHispano.create(pais);
            }
        }
    }

    static async obtenerPaises() {
        return await paisHispano.find();
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