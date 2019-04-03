var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  displayName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  cart: [{ type: String }],
  billing: {
    ccNum: { type: String, required: true },
    ccCVV: { type: String, required: true },
    ccExp: { type: String, required: true }
  },
  level: { type: String, required: true }
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
