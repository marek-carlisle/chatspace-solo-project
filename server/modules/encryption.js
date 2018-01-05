// encryption.js
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const publicAPI = {
  encryptPassword: function(password) {
      const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
      return bcrypt.hashSync(password, salt);
  },
  comparePassword: function(candidatePassword, storedPassword) {
      console.log('comparing passwords');
      console.log(candidatePassword, storedPassword);
      //ndidatePassword, this.password
      return bcrypt.compareSync(candidatePassword, storedPassword);
  }
};

module.exports = publicAPI;
