const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const {engine} = require('express-handlebars');
app.get('/', function (req, res) {
    res.render('home')
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'static')));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
  );
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'views'));

app.listen(process.env.PORT || 3000)