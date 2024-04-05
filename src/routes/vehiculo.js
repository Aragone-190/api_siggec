module.exports = app => {
    
    const { verificarToken } = app.middlewares.auth;
    const Vehiculo = app.controllers.vehiculo;    
    
    app.post('/addNewVehiculo', Vehiculo.addNewVehiculo); 
    
    app.get('/getRegistrosVehiculo', Vehiculo.getRegistrosVehiculo);
}