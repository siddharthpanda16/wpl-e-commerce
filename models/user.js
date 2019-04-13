const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  displayName: { type: String, required: true }, // must be unique
  username: { type: String, required: true },
  password: { type: String, required: true },

  billing: {
    ccNum: { type: String, required: true },
    ccCVV: { type: String, required: true },
    ccExp: { type: String, required: true }
  },
  level: { type: String, required: true },
  isAdmin: { type: Boolean, required: true }
});

UserSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
