const express = require("express");

const userController = require("./user-controller");
const { schemas } = require("./user-schemas");
const { validateParam } = require("../../modules/helpers");

const router = express.Router();

router.get("/:id", validateParam(schemas.id, "id"), userController.getById);

module.exports = router;
