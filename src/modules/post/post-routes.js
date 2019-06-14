const express = require("express");

const ponstController = require("./post-controller");
const { schemas } = require("./post-schemas");
const { validateParam, validateBody } = require("../../modules/helpers");

const router = express.Router();

router
  .post("/", validateBody(schemas.post), ponstController.create)
  .get("/", ponstController.getPaginated)
  .get("/:id", validateParam(schemas.id, "id"), ponstController.getById)
  .post("/delete", validateBody(schemas.id), ponstController.deleteById);

module.exports = router;
