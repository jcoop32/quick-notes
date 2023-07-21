const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6; //determines how much processing time it takes to perform the hash

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trime: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trime: true,
      minLength: 3,
    },
  },
  {
    timestamps: true,
    // even though password is hashed, dont include when passing around user model
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  },
);

// hashing password
userSchema.pre('save', async function (next) {
  // 'this' keyword is the user document
  //  for when the password has not been modified
  if (!this.isModified('password')) return next();
  // replace the password with the computed has
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);
