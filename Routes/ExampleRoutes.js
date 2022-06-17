const { Router } = require("express");
const router = Router();
const {
  example,
  examplePagination,
  insertExample,
} = require("../Controllers/ExampleColtroller");

router.get("/example", example);
router.get("/pagination", examplePagination);
router.post("/insert", insertExample);

module.exports = router;
