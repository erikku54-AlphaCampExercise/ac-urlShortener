// app.js
// require packages used in the project
const express = require('express');
const exphbs = require('express-handlebars').engine; // <---express-handlebars版本v7
const routes = require('./routes'); // 引用總路由
require('./config/mongoose'); // 連線

const app = express();
const port = 3000;


// setting template engine
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// setting middleware: static files directory, body-parser & route
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`);
});
