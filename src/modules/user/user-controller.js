const userService = require("./user-services");
const { logger } = require("../../configs");
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

module.exports = {
  getById
};
