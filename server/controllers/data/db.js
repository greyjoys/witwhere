// const uri = require('./greyjoy.js');
const uri = '';
const pgp = require('pg-promise')()
const db = pgp(uri);
const bcrypt = require('bcrypt')

module.exports = {
  createUser: (req, res, next) => {
    const saltRounds = 10
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      db.none(`INSERT INTO users ("username", "password") VALUES ('${req.body.username}', '${hash}');`)
      .then(() => console.log('success'))
      .catch(err => console.log(err))
      });
    next();
  },

  signinUser: (req, res, next) => {
    // bcrypt.compare()
    db.any(`SELECT password FROM users WHERE username = '${req.body.username}';`, [true])
    .then((data) => {
      if (data.length === 0) {
        return res.redirect('/api/signup')
      }
      bcrypt.compare(req.body.password, data[0].password, (err, res) => {
        try {
          if (res) {
            console.log('password matches!')
            next()
          }
          else return res.redirect('/api/signup')
        } catch {
          err => console.log(err)
        }
      })
    })
    .catch(err => {
      //do stuff here on error
      console.log(err) 
    })
    next();
  }
}