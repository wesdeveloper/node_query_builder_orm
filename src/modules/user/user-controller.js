const userService = require("./user-services");
const { logger } = require("../../configs");

/**
 *  Create an user.
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 */
const create = async (req, res) => {
  const { body } = req.payload;
  try {
    logger.trace(`userController.create: ${body.name} - ${body.cpf}`);

    const user = await userService.create(body);
    if (!user) {
      throw error("Failed to create user");
    }
    return res.parseReturn({
      status: 201,
      data: user
    });
  } catch (e) {
    logger.error(`userController.create: ${body.name} - ${body.cpf}`, e);
    return res.parseReturn({
      status: 500
    });
  }
};

/**
 *  Get an user by id.
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 */
const getById = async (req, res) => {
  try {
    const { id } = req.payload.params;
    logger.trace(`userController.getById: ${id}`);
    const user = await userService.getById(id);
    if (!user) {
      return res.parseReturn({
        status: 404,
        data: [{ message: "user not found" }]
      });
    }
    return res.parseReturn({
      status: 200,
      data: user
    });
  } catch (e) {
    logger.error(`userController.getById: ${id}`, e);
    return res.parseReturn({
      status: 500
    });
  }
};

/**
 *  Get an page of users.
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 */
const getPaginated = async (req, res) => {
  const { page, quantity } = req.query || {};
  try {
    logger.trace(`userController.getPaginated`);
    const users = await userService.getPaginated(page, quantity);
    if (!users) {
      throw error("Failed to get users");
    }
    return res.parseReturn({
      status: 200,
      data: users
    });
  } catch (e) {
    logger.error(`userController.getPaginated`, e);
    return res.parseReturn({
      status: 500
    });
  }
};

/**
 *  Delete an user by id.
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 */
const deleteById = async (req, res) => {
  const { id } = req.payload.body;
  try {
    logger.trace(`userController.deleteById: ${id}`);

    const user = await userService.getById(id);
    if (!user) {
      return res.parseReturn({
        status: 404,
        data: [{ message: "user not found" }]
      });
    }

    await userService.deleteById(id);
    return res.parseReturn({
      status: 200
    });
  } catch (e) {
    logger.error(`userController.deleteById: ${id}`, e);
    return res.parseReturn({
      status: 500
    });
  }
};

module.exports = {
  create,
  getById,
  getPaginated,
  deleteById
};
