const { Schema, model } = require("mongoose");

const exampleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
  },
});

const Example = model("example", exampleSchema);

module.exports = Example;
