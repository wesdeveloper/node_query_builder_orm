const express = require("express");

const userController = require("./user-controller");
const { schemas } = require("./user-schemas");
const { validateParam, validateBody } = require("../../modules/helpers");

const router = express.Router();

router
  .post("/", validateBody(schemas.user), userController.create)
  .get("/", userController.getPaginated)
  .get("/:id", validateParam(schemas.id, "id"), userController.getById)
  .post("/delete", validateBody(schemas.id), userController.deleteById);

module.exports = router;
