import mongoose from "mongoose";

const paisSchema = new mongoose.Schema(
    {
        name: {type: String, unique: true, required: true},
        capital: [String],
        borders: [String],
        area: {type: Number, min: 0, required: true},
        population: {type: Number, min: 0, required: true},
        timezones: [String],
        creador: {type: String, required: true},
    }
)



const paisHispano = mongoose.model('paisHispano', paisSchema, 'Grupo-03');

export default paisHispano;