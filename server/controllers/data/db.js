// const uri = require('./greyjoy.js');

const KEYS = require('../../keys/keys.js');
const uri = KEYS.POSTGRES_URI;
const pgp = require('pg-promise')();
const db = pgp(uri);
const bcrypt = require('bcrypt');
const cookieController = require('../cookie/cookieController.js');
// const sessionController = require('../cookie/sessionController.js')

module.exports = {
  // User Sign Up
  createUser: (req, res, next) => {
    console.log(req.body);
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      if (err) {
        throw new Error(err);
      }
      // adds the new user to the db
      db.none('INSERT INTO users(username, password) VALUES ($1, $2);', [
        req.body.username,
        hash
      ])
        .then(() => {
<<<<<<< HEAD
          db.one(`SELECT * FROM users WHERE username = $1;`, [
            req.body.username
          ]).then(data => {
            console.log(data);
            cookieController.setSSIDCookie(res, data._id); //set SSIDCookie after user created to their _id
            sessionController.startSession(data._id);
            res.send({ authenticated: true });
          });
=======
          console.log('user created')
          db.one(`SELECT * FROM users WHERE username = '${req.body.username}';`)
            .then(data => {
              console.log(data)
              cookieController.setUserCookie(res, data.username)
              cookieController.setSSIDCookie(res, data._id) //set SSIDCookie after user created to their _id
              // sessionController.startSession(data._id)
              next();
            })
            .catch(err => console.log(err));
>>>>>>> b021d7780c58510ef4336889502598c985781a97
        })
        .catch(error => {
          console.log(error);
          next();
        });
      // Add user to 'users' table. Table has columns (_id, username (varchar(20)), password varchar(256))
    });
  },

  // User Log In
  loginUser: (req, res, next) => {
    db.any(
      `SELECT users._id, password, users.username FROM users WHERE username = '${req.body.username}';`,[true]
    )
      .then(data => {
        console.log(data);
        if (data.length === 0) {
          return res.redirect('/api/signup');
        }
        bcrypt.compare(req.body.password, data[0].password, (err, response) => {
          try {
            if (response) {
              cookieController.setUserCookie(res, data[0].username)
              cookieController.setSSIDCookie(res, data[0]._id)
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
  }
};
