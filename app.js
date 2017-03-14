const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon')

const app = express();
const port = process.env.PORT || 3000;

/*Vue主入口*/
const index = require('./router/index');
/*后台RestFul接口*/
const api = require('./router/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use(favicon(__dirname + '/src/assets/favicon.ico'));
app.use('/',index);
app.use('/api',api);

app.listen(port,()=>{
  console.log('http://localhost:'+port);
});


module.exports = app;