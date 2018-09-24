const axios = require('axios');

let getTemperatura = async(latitud, longitud) => {


    let temperatura = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=f6fdd760f9d9279f2d55870b4e7b9bc7`);

    if (temperatura.data.cod == '200') {
        return temperatura.data.main.temp;
    } else {
        throw new Error(`No se encontro la ciudad [${temperatura.message}]`);
    }

}

module.exports = {
    getTemperatura
}