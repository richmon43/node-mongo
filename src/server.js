const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Inicializaciones
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({
    limit: '50mb', ///////// LIMIT for URL ENCODE (image data)
    extended: true
}));

// Variables Globales

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/vendedor.routes'));

// Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;