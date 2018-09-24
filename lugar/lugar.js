const axios = require('axios');

let getLugar = async(direccion) => {

    let address = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados con los datos ingresados. ${direccion}`);
    } else {
        let direccion = JSON.stringify(resp.data.results[0].formatted_address);
        let latitud = JSON.stringify(resp.data.results[0].geometry.location.lat);
        let longitud = JSON.stringify(resp.data.results[0].geometry.location.lng);

        return {
            direccion,
            latitud,
            longitud
        };
    }
}

module.exports = {
    getLugar
};