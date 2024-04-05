module.exports = app => {
    
    const { verificarToken } = app.middlewares.auth;
    const Cadaver = app.controllers.cadaver;    
    
    app.post('/addNewCadaver', Cadaver.addNewCadaver); 
    
    app.get('/getRegistrosCadaver', Cadaver.getRegistrosCadaver);
}