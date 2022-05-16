const createError = require("http-errors");
// const ObjectId = require("mongoose").Types.ObjectId;

const example = async (req, res, next) => {
  try {
    res.status(200).send({
      status: 1,
      message: "Login Successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { example };
