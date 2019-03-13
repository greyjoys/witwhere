const KEYS = require('../../keys/keys.js')
const pgp = require('pg-promise')();
const uri = KEYS.POSTGRES_URI;
const db = pgp(uri);

module.exports = {

  isLoggedIn: (req, res, next) => {

  },

  startSession: (ssid) => {
    console.log('inside start session')
    db.none('INSERT INTO users(sessionssidcookie) VALUES($1)', [ssid])
      .then(()=>{
        console.log('session SSID set!')
      })
      .catch(err => console.log(err));
  }

}