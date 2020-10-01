const express = require('express')
const app = express();
const routes = require('./routes/routes')
const morgan = require('morgan')
const { db } = require('./models');

app.use(morgan('tiny'))
app.use(express.static(__dirname +'public'));
app.use(express.urlencoded({extended: false}));
app.use('/', routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

// db.authenticate()
//   .then(() => {
//     console.log('connected to the database');
//   })