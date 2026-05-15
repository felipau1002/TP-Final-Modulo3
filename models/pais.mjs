import mongoose from "mongoose";

const paisSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        capital: {type: String, required: true},
        borders: [String],
        area: {type: Number, min: 0, required: true},
        population: {type: Number, min: 0, required: true},
        timezones: {type: String, required: true},
        creador: {type: String, required: true},
    }
)



const paisHispano = mongoose.model('paisHispano', paisSchema, 'Grupo-03');

export default paisHispano;