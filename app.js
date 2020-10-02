const express = require('express')
const app = express();
const wikiRoutes = require('./routes/wiki');
const usersRoutes = require('./routes/users');
const morgan = require('morgan')
const { db, Page, User } = require('./models');

app.use(morgan('tiny'))
app.use(express.static(__dirname +'public'));
app.use(express.urlencoded({extended: false}));
app.use('/wiki', wikiRoutes);
app.use('/users', usersRoutes)
app.use('/',(req,res) =>{
  res.redirect('/wiki')
})

const PORT = 3000;

const init = async() => {
  await Page.sync();
  await User.sync();

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();
// db.authenticate()
//   .then(() => {
//     console.log('connected to the database');
//   })