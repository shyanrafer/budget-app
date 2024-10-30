// import Schema and model from mongoose
const { Schema, model } = require('mongoose')
// import bcrypt for password hashing
const bcrypt = require ('bcrypt')
// these auto added... not sure if needed
const { unique } = require('prelude-ls')
const { type } = require('doctrine')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    // unique ensures isnt a copy of pre-existing name in db
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // using regex to ensure format of email
    match: [/.+@.+\.dotAll.+/, 'Email format invalid.'],
  }, 
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  // I will need to consider other points related to the user and add them here... 
  // wondering about security of some of these points
})

// the following checks to see if a password is new of modded and then salts
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password =  await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// the following verifies if the password entered password when salted matches the db version.
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password)
};

// creates an instance of User that references the User.js page and userSchema
const User = model('User', userSchema);

// exports
module.exports = User;