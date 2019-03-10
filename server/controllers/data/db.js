// const uri = require('./greyjoy.js');
const uri = '';
const pgp = require('pg-promise')()
const db = pgp(uri);

module.exports = {
  createUser: (req, res, next) => {
    db.none(`INSERT INTO users ("username", "password") VALUES ('${req.body.username}', '${req.body.password}');`, [true])
      .then(() => console.log('success'))
      .catch(err => console.log(err))
    next();
  },
  signinUser: (req, res, next) => {
    db.any(`SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}';`, [true])
    .then((data) => {
      //do stuff here on success
      console.log(data)
      if (data.length === 1){res.redirect('/')}
      //else (res.redirect('/signup')) // redirect
    })
    .catch(err => {
      //do stuff here on error
      console.log(err) 
    })
    next();
  }
}


// pg.connect(uri, (err, db) => {
//   if (err) throw new Error(err);
//     db.result(`SELECT * from users`, (result) => {
//       console.log(result);
//     })
// })