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
  // adds the new user to the db
  // Add user to 'users' table. Table has columns (_id, username (varchar(20)), password varchar(256))
  createUser: (req, res, next) => {
    console.log('req body ' , req.body);
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
          db.one(`SELECT * FROM users WHERE username = $1;`, [
            req.body.username
          ]).then((data) => {
            console.log('logging ', data);
            cookieController.setSSIDCookie(res, data._id); //set SSIDCookie after user created to their _id
            res.send({ authenticated: true });
          });
        })
        .catch(err => {
          console.log('sending error')
          res.json({ error: err })
          // const responseObj = {};
          // responseObj.error = err;
          // res.send(responseObj);
        })
    
      // Add user to 'users' table. Table has columns (_id, username (varchar(20)), password varchar(256))
    });
  },

  // User Log In
  loginUser: (req, res, next) => {
    db.one(`SELECT * FROM users WHERE username = $1;`, [req.body.username])
      .then(data => {
        console.log(data);
        if (data.length === 0) {
          return res.redirect('/api/signup');
        }
        
        bcrypt.compare(req.body.password, data.password, (err, isMatch) => {
          try {
            if (isMatch) {
              console.log('theres a match!')
              cookieController.setUserCookie(res, data.username);
              cookieController.setSSIDCookie(res, data._id);
              res.send({ authenticated: true });
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
