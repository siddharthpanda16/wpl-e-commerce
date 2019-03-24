var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  displayName: { type: String, required: true, max: 100 },
  username: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 }
});

// Export the model
module.exports = mongoose.model("Product", ProductSchema);
