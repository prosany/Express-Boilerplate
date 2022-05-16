const { Router } = require("express");
const router = Router();
const { example } = require("../Controllers/ExampleColtroller");

router.get("/example", example);

module.exports = router;
