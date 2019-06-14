const userModel = require("./user-model");

/**
 *  Create an user.
 *
 * @param {Object} user - User data of the new user.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const create = async user => userModel.create(user);

/**
 * Get an user by the id.
 *
 * @param {String} id - Id of the user.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getById = async id => userModel.getById(id);

/**
 * Get users paginated.
 *
 * @param {Number} page - page of users.
 * @param {Number} pageSize - pageSize of users.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getPaginated = async (page, pageSize) =>
  userModel.getPaginated(page, pageSize);

/**
 * Delete an user by the id.
 *
 * @param {String} id - Id of the user.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const deleteById = async id => userModel.deleteById(id);

module.exports = {
  create,
  getById,
  getPaginated,
  deleteById
};
