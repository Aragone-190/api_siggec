module.exports = (sequelize, DataType) => {
    const Cadaver = sequelize.define('Cadaver',{
        id_cadaver: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        identificacionD: {
            type: DataType.STRING,
            allowNull: false
        },
        nombreD: {
            type: DataType.STRING,
            allowNull: false
        },
        apodoD: {
            type: DataType.STRING,
            allowNull: false
        },
        edadD: {
            type: DataType.STRING,
            allowNull: false
        },
        sexoD: {
            type: DataType.STRING,
            allowNull: false
        },
        parentescoD: {
            type: DataType.STRING,
            allowNull: false
        },
        sParticulares: {
            type: DataType.STRING,
            allowNull: false
        },
        noP: {
            type: DataType.STRING,
            allowNull: false
        },
        descripcionD: {
            type: DataType.STRING,
            allowNull: false
        },
        vestimenta: {
            type: DataType.STRING,
            allowNull: false
        },
        tipoPrenda: {
            type: DataType.STRING,
            allowNull: false
        },
        posicion: {
            type: DataType.STRING,
            allowNull: false
        },
        descripcionV: {
            type: DataType.STRING,
            allowNull: false
        },
        orientacion1: {
            type: DataType.STRING,
            allowNull: false
        },
        orientacion2: {
            type: DataType.STRING,
            allowNull: false
        },
        orientacion3: {
            type: DataType.STRING,
            allowNull: false
        },
        orientacion4: {
            type: DataType.STRING,
            allowNull: false
        },
        orientacion5: {
            type: DataType.STRING,
            allowNull: false
        },
        observacionesO: {
            type: DataType.STRING,
            allowNull: false
        },
        observacionesPC: {
            type: DataType.STRING,
            allowNull: false
        },
        ataduras: {
            type: DataType.STRING,
            allowNull: false
        },
        idA: {
            type: DataType.STRING,
            allowNull: false
        },
        descripcionA: {
            type: DataType.STRING,
            allowNull: false
        },
        obeservacionesA: {
            type: DataType.STRING,
            allowNull: false
        },
        fenomenosCadavericos: {
            type: DataType.STRING,
            allowNull: false
        },
        especifiqueFC: {
            type: DataType.STRING,
            allowNull: false
        },
        noAplica: {
            type: DataType.STRING,
            allowNull: false
        },
        lesionesVisibles: {
            type: DataType.STRING,
            allowNull: false
        },
        simbologia: {
            type: DataType.STRING,
            allowNull: false
        },
        tipoLesion: {
            type: DataType.STRING,
            allowNull: false
        },
        descripcionLV: {
            type: DataType.STRING,
            allowNull: false
        },
        ubicacionLV: {
            type: DataType.STRING,
            allowNull: false
        },
        diagramaCorporal: {
            type: DataType.STRING,
            allowNull: false
        },
        pertenencias: {
            type: DataType.STRING,
            allowNull: false
        },
        identificacionP: {
            type: DataType.STRING,
            allowNull: false
        },
        descripcionP: {
            type: DataType.STRING,
            allowNull: false
        },
        fechaEntrega: {
            type: DataType.STRING,
            allowNull: false
        },
        lugarEntrega: {
            type: DataType.STRING,
            allowNull: false
        },
        observacionesP: {
            type: DataType.STRING,
            allowNull: false
        },
        horaLevantamiento: {
            type: DataType.STRING,
            allowNull: false
        },
        observacionesL: {
            type: DataType.STRING,
            allowNull: false
        },
        createAt: {
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
        nuc: {
            type: DataType.STRING,
            allowNull: false
        },
        folio: {
            type: DataType.STRING,
            allowNull: false
        },
    }, 
    {
        tableName: 'cadaver',        
        timestamps: false
    });

    return Cadaver;
}




