module.exports = (sequelize, DataType) => {
    const Vehiculo = sequelize.define('Vehiculo',{
        id_vehiculo: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        identificacion: {
            type: DataType.STRING,
            allowNull: false
        },
        marca: {
            type: DataType.STRING,
            allowNull: false
        },
        tipo: {
            type: DataType.STRING,
            allowNull: false
        },
        linea: {
            type: DataType.STRING,
            allowNull: false
        },
        modelo: {
            type: DataType.STRING,
            allowNull: false
        },
        color: {
            type: DataType.STRING,
            allowNull: false
        },
        noPuertas: {
            type: DataType.STRING,
            allowNull: false
        },
        placas: {
            type: DataType.STRING,
            allowNull: false
        },
        noIdentificacion: {
            type: DataType.STRING,
            allowNull: false
        },
        otroDato: {
            type: DataType.STRING,
            allowNull: false
        },
        orientacionFrente: {
            type: DataType.STRING,
            allowNull: false
        },
        observacionesE: {
            type: DataType.STRING,
            allowNull: false
        },
        observacionesI: {
            type: DataType.STRING,
            allowNull: false
        },
        ninguno: {
            type: DataType.STRING,
            allowNull: false
        },
        idIndicio: {
            type: DataType.STRING,
            allowNull: false
        },
        tipoIndicio: {
            type: DataType.STRING,
            allowNull: false
        },
        descripcionIndicio: {
            type: DataType.STRING,
            allowNull: false
        },
        ubicacionIndicio: {
            type: DataType.STRING,
            allowNull: false
        },
        horaIndicio: {
            type: DataType.STRING,
            allowNull: false
        },
        observacionGeneral: {
            type: DataType.STRING,
            allowNull: false
        },
        traslado: {
            type: DataType.STRING,
            allowNull: false
        },
        horaTraslado: {
            type: DataType.STRING,
            allowNull: false
        },
        lugarTraslado: {
            type: DataType.STRING,
            allowNull: false
        },
        responsableTraslado: {
            type: DataType.STRING,
            allowNull: false
        },
        noAplica: {
            type: DataType.STRING,
            allowNull: false
        },
        fechaProcesamiento: {
            type: DataType.STRING,
            allowNull: false
        },
        inicioProcesamiento: {
            type: DataType.STRING,
            allowNull: false
        },
        finalProcesamiento: {
            type: DataType.STRING,
            allowNull: false
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false
        },
        cargo: {
            type: DataType.STRING,
            allowNull: false
        },
        firma: {
            type: DataType.STRING,
            allowNull: false
        },
        latitud: {
            type: DataType.STRING,
            allowNull: false
        },
        longitud: {
            type: DataType.STRING,
            allowNull: false
        },
        fechaCreacion: {
            type: DataType.STRING,
            allowNull: false
        },
        nuc: {
            type: DataType.STRING,
            allowNull: false
        },
        folio: {
            type: DataType.STRING,
            allowNull: false
        },
        entregado: {
            type: DataType.STRING,
            allowNull: false
        },
    }, 
    {
        tableName: 'vehiculo',        
        timestamps: false
    });

    return Vehiculo;
}