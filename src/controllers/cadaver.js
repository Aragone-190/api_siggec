const Sequelize = require('sequelize');

module.exports = app => {

    const Op = Sequelize.Op;
    const Cadaver = app.database.models.Cadaver;

    app.getRegistrosCadaver = (req, res) => {
        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);
      
        Cadaver.findAndCountAll({ 
            order: [
                ['createAt', 'DESC'],
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

    app.addNewCadaver = (req, res) => {
        let folder = new Cadaver({ 
            id_cadaver: req.body.id_cadaver,
            identificacionD: req.body.identificacionD,
            nombreD: req.body.nombreD,
            apodoD: req.body.apodoD,
            edadD: req.body.edadD,
            sexoD: req.body.sexoD,
            parentescoD: req.body.parentescoD,
            sParticulares: req.body.sParticulares,
            noP: req.body.noP,
            descripcionD: req.body.descripcionD,
            vestimenta: req.body.vestimenta,
            tipoPrenda: req.body.tipoPrenda,
            posicion: req.body.posicion,
            descripcionV: req.body.descripcionV,
            orientacion1: req.body.orientacion1,
            orientacion2: req.body.orientacion2,
            orientacion3: req.body.orientacion3,
            orientacion4: req.body.orientacion4,
            orientacion5: req.body.orientacion5,
            observacionesO: req.body.observacionesO,
            observacionesPC: req.body.observacionesPC,
            ataduras: req.body.ataduras,
            idA: req.body.idA,
            descripcionA: req.body.descripcionA,
            obeservacionesA: req.body.obeservacionesA,
            fenomenosCadavericos: req.body.fenomenosCadavericos,
            especifiqueFC: req.body.especifiqueFC,
            noAplica: req.body.noAplica,
            lesionesVisibles: req.body.lesionesVisibles,
            simbologia: req.body.simbologia,
            tipoLesion: req.body.tipoLesion,
            descripcionLV: req.body.descripcionLV,
            ubicacionLV: req.body.ubicacionLV,
            diagramaCorporal: req.body.diagramaCorporal,
            pertenencias: req.body.pertenencias,
            identificacionP: req.body.identificacionP,
            descripcionP: req.body.descripcionP,
            fechaEntrega: req.body.fechaEntrega,
            lugarEntrega: req.body.lugarEntrega,
            observacionesP: req.body.observacionesP,
            horaLevantamiento: req.body.horaLevantamiento,
            observacionesL: req.body.observacionesL,
            createAt: req.body.createAt,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            nombre: req.body.nombre,
            cargo: req.body.cargo,
            firma: req.body.firma,
            nuc: req.body.nuc,
            folio: req.body.folio
        });        
        
        Cadaver.create(folder.dataValues, {
            fields: [
            'id_cadaver',
            'identificacionD',
            'nombreD',
            'apodoD',
            'edadD',
            'sexoD',
            'parentescoD',
            'sParticulares',
            'noP',
            'descripcionD',
            'vestimenta',
            'tipoPrenda',
            'posicion',
            'descripcionV',
            'orientacion1',
            'orientacion2',
            'orientacion3',
            'orientacion4',
            'orientacion5',
            'observacionesO',
            'observacionesPC',
            'ataduras',
            'idA',
            'descripcionA',
            'obeservacionesA',
            'fenomenosCadavericos',
            'especifiqueFC',
            'noAplica',
            'lesionesVisibles',
            'simbologia',
            'tipoLesion',
            'descripcionLV',
            'ubicacionLV',
            'diagramaCorporal',
            'pertenencias',
            'identificacionP',
            'descripcionP',
            'fechaEntrega',
            'lugarEntrega',
            'observacionesP',
            'horaLevantamiento',
            'observacionesL',
            'createAt',
            'latitud',
            'longitud',
            'nombre',
            'cargo',
            'firma',
            'nuc',
            'folio'
        ]
        })
        .then(result => {                       
            res.json({
                OK: true,
                Cadaver: result
            });
        })
        .catch(err => {            
            res.status(412).json({
                OK: false,
                msg: err
            });
        });        
    }

    // app.getRegistrosCadaver = (req, res) => {
    //     Cadaver.findAll({ })
    //     .then(result => {
    //         res.json({
    //             OK: true,
    //             Total: result.length,
    //             Cadavers: result
    //         })
    //     })
    //     .catch(error => {
    //         res.status(412).json({
    //             msg: error.message
    //         });
    //     });
    // }

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