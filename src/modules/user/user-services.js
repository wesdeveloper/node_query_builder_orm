const userModel = require("./user-model");

/**
 * Get an user by the id.
 *
 * @param {String} id - Id of the user.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getById = async id => userModel.getById(id);

module.exports = {
  getById
};
