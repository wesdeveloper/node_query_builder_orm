const uuidv4 = require("uuid/v4");
const { database } = require("../../configs");

// eslint-disable-next-line import/order
const Bookshelf = require("bookshelf")(database);

Bookshelf.plugin("registry");
Bookshelf.plugin("visibility");
Bookshelf.plugin("pagination");

const User = Bookshelf.Model.extend({
  tableName: "users"
});

/**
 *  Create an user.
 *
 * @param {Object} user - User data of the new user.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const create = async user =>
  User.forge({ id: uuidv4(), ...user }).save(null, { method: "insert" });

/**
 * Get an user by the id.
 *
 * @param {String} id - Id of the user.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getById = async id => User.where({ id }).fetch();

/**
 * Get users paginated.
 *
 * @param {Number} page - page of users if not passed default is 1.
 * @param {Number} pageSize - pageSize of users if not passed default is 10.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getPaginated = async (page = 1, pageSize = 10) =>
  User.forge()
    .fetchPage({ page, pageSize })
    .then(({ models, pagination }) => {
      return { page: models, pagination };
    });

/**
 * Delete an user by the id.
 *
 * @param {String} id - Id of the user.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const deleteById = async id => User.forge({ id }).destroy();

module.exports = { create, getById, getPaginated, deleteById };
