const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            demand: true,
            desc: 'Direccion de la ciudad para obtener el clima.',
            alias: 'd'
        }
    })
    .help()
    .argv;


let getInfo = async(direccion) => {

    try {
        let dLugar = await lugar.getLugar(direccion);
        let dTemperatura = await clima.getTemperatura(dLugar.latitud, dLugar.longitud);

        data = {
            'direccion': dLugar.direccion,
            'latitud': dLugar.latitud,
            'longitud': dLugar.longitud,
            'temperatura': dTemperatura,
        }

        return `La temperatura en ${data.direccion} es de ${data.temperatura} °C.`;

    } catch (error) {
        return `No se pudo obtener información para la dirección ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(msj => console.log(msj))
    .catch(err => console.log(err));