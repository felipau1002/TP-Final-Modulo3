import paisesRepository from '../repository/paisesRepository.mjs'


export async function consumirAPIPaises() {
    const response = await fetch("https://restcountries.com/v3.1/region/america");
    const datos = await response.json();

    
    const paisLimpio = datos
        .filter(pais => pais.languages && pais.languages.spa)
        .map(pais => ({
        name: pais.name.common,
        capital: pais.capital,
        borders: pais.borders,
        area: pais.area,
        population: pais.population,
        timezones: pais.timezones,
        creador: "Felipe_Calas",
    }));


    return paisesRepository.guardarPaises(paisLimpio);
}


export async function crearPais(datos) {
    return await paisesRepository.agregarPais(datos);
}


export async function editarPais(id, datosActualizados) {
    return await paisesRepository.editarPais(id, datosActualizados);
}


export async function eliminarPais(id) {
    return await paisesRepository.eliminarPais(id);
}