// const uri = require('./greyjoy.js');

const KEYS = require('../../keys/keys.js');
const uri = KEYS.POSTGRES_URI;
const pgp = require('pg-promise')();
const db = pgp(uri);
const bcrypt = require('bcrypt');

module.exports = {
  // User Sign Up
  createUser: (req, res, next) => {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      if (err) {
        throw new Error(err);
      }
      db.none(
        `INSERT INTO users ("username", "password") VALUES ('${
          req.body.username
        }', '${hash}');`
      ) // Add user to 'users' table. Table has columns (_id, username (varchar(20)), password varchar(256))
        .then(() => console.log('success'))
        .catch(err => console.log(err));
    });
    next();
  },

  // User Log In
  signinUser: (req, res, next) => {
    db.any(
      `SELECT password FROM users WHERE username = '${req.body.username}';`,
      [true]
    )
      .then(data => {
        if (data.length === 0) {
          return res.redirect('/api/signup');
        }
        bcrypt.compare(req.body.password, data[0].password, (err, res) => {
          try {
            if (res) {
              console.log('password matches!');
              next();
            } else return res.redirect('/api/signup');
          } catch (err) {
            console.log('Bcrypt Error:', err);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
    next();
  }
};
