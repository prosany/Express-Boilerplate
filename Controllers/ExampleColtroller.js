const createError = require("http-errors");
const Example = require("../Models/ExampleModel");
// const ObjectId = require("mongoose").Types.ObjectId;

const example = async (req, res, next) => {
  try {
    const data = await Example.find({});
    res.status(200).send({
      status: 1,
      total: data.length,
      message: "Login Successful",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const examplePagination = async (req, res, next) => {
  try {
    let { page, limit } = req.query;
    if (!page) page = 1;
    if (!limit) limit = 10;

    const limited = parseInt(limit);
    const skip = parseInt(page - 1) * limited;
    const data = await Example.find({})
      .limit(limited)
      .skip(skip)
      .select("-__v");
    const total = await Example.countDocuments();

    res.status(200).send({
      status: 1,
      message: "Successfully Fetched.",
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
      },
      data,
    });
  } catch (error) {
    next(error);
  }
};

const insertExample = async (req, res, next) => {
  try {
    const { name, descriptions, status } = req.body;
    const data = await Example.create({ name, descriptions, status });
    res.status(200).send({
      status: 1,
      message: "Insert Successful",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { example, examplePagination, insertExample };
