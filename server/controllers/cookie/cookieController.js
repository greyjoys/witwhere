const sessionController = require('./sessionController')

module.exports = { 

  setCookie(req, res, next) {
    res.cookie('secretCookie', Math.floor(Math.random()* 100));
    next()
  },
  
  setSSIDCookie(res, ssid) {
    res.cookie('ssid', ssid, { httpOnly: true })
  }

}