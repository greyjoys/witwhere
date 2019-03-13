class UserModel {
  constructor(username, socket) {
    this.username = username;
    this.score = 0;
    this.socket = socket;
  }
}

module.exports = { UserModel };
