const { get } = require('lodash');
const Sequelize = require('sequelize');

module.exports = app => {

    const Op = Sequelize.Op;
    const Vehiculo = app.database.models.Vehiculo;

    app.getRegistrosVehiculo = (req, res) => {
        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);
      
        Vehiculo.findAndCountAll({ 
            order: [
                ['fechaCreacion', 'DESC'],
            ],
            limit, 
            offset 
        })
        .then(re => {
            const response = getPagingData(re, page, limit);
            res.send(response);
        })
        .catch(error => {
            res.status(412).json( {
                msg: error.message
            });
        });
    }

    app.addNewVehiculo = (req, res) => {
        let folder = new Vehiculo({ 
            id_vehiculo: req.body.id, 
            identificacion: req.body.identificacion,
            marca: req.body.marca,
            tipo: req.body.tipo,
            linea: req.body.linea,
            modelo: req.body.modelo,
            color: req.body.color,
            noPuertas: req.body.noPuertas,
            placas: req.body.placas,
            noIdentificacion: req.body.noIdentificacion,
            otroDato: req.body.otroDato,
            orientacionFrente: req.body.orientacionFrente,
            observacionesE: req.body.observacionesE,
            observacionesI: req.body.observacionesI,
            ninguno: req.body.ninguno,
            idIndicio: req.body.idIndicio,
            tipoIndicio: req.body.tipoIndicio,
            descripcionIndicio: req.body.descripcionIndicio,
            ubicacionIndicio: req.body.ubicacionIndicio,
            horaIndicio: req.body.horaIndicio,
            observacionGeneral: req.body.observacionGeneral,
            traslado: req.body.traslado,
            horaTraslado: req.body.horaTraslado,
            lugarTraslado: req.body.lugarTraslado,
            responsableTraslado: req.body.responsableTraslado,
            noAplica: req.body.noAplica,
            fechaProcesamiento: req.body.fechaProcesamiento,
            inicioProcesamiento: req.body.inicioProcesamiento,
            finalProcesamiento: req.body.finalProcesamiento,
            nombre: req.body.nombre,
            cargo: req.body.cargo,
            firma: req.body.firma,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            fechaCreacion: req.body.fechaCreacion,
            nuc: req.body.nuc,
            folio: req.body.folio,
            entregado: req.body.entregado
        });

        Vehiculo.create(folder.dataValues, {
            fields: [
                'id_vehiculo',
                'identificacion',
                'marca',
                'tipo',
                'linea',
                'modelo',
                'color',
                'noPuertas',
                'placas',
                'noIdentificacion',
                'otroDato',
                'orientacionFrente',
                'observacionesE',
                'observacionesI',
                'ninguno',
                'idIndicio',
                'tipoIndicio',
                'descripcionIndicio',
                'ubicacionIndicio',
                'horaIndicio',
                'observacionGeneral',
                'traslado',
                'horaTraslado',
                'lugarTraslado',
                'responsableTraslado',
                'noAplica',
                'fechaProcesamiento',
                'inicioProcesamiento',
                'finalProcesamiento',
                'nombre',
                'cargo',
                'firma',
                'latitud',
                'longitud',
                'fechaCreacion',
                'nuc',
                'folio',
                'entregado'
            ]
        })
        .then(result => {                       
            res.json({
                OK: true,
                Vehiculo: result
            });
        })
        .catch(err => {            
            res.status(412).json({
                OK: false,
                msg: err
            });
        });
    }

    const quitarAcentos = (cadena) => {
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','ñ':'n',"'":' ',"¿":' ',"?":' ','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','Ñ':'N'};
        return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
    }

    const getPagination = (page, size) => {
        const limit = size ? +size : 10;
        const offset = +page;
        return { limit, offset };
    }

    const getPagingData = (data, page, limit) => {
        const { count: totalItems, rows: registers } = data;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalItems / limit);
        
        return { totalPages, totalItems, currentPage, registers };
    }

    return app;
}