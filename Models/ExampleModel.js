const { Schema } = require("mongoose");

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

const Example = mongoose.model("example", exampleSchema);

module.exports = Example;
