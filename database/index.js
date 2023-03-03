const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/myapp')
  .catch(error => handleError(error));
mongoose.connection.on('error', err => {
  logError(err);
});
mongoose.connection.once('open', function() {
  console.log('We\'re connected!')
});

const Schema = mongoose.Schema;

const authSchema = new Schema({
  // _id is generated automatically
  email: {type: String, unique: true},
  password: String
})

const Auth = mongoose.model('Auth', authSchema);

const models = {

  getAll: () => {
    return Auth.find();
  },

  save: (term) => {
    return Auth.create(term);
  },
};

module.exports.models = models;
