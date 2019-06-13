const { database } = require("../../configs");
const bookshelf = require("bookshelf")(database);

const User = bookshelf.Model.extend({
  tableName: "users"
});

/**
 * Get an user by the id.
 *
 * @param {String} id - Id of the user.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getById = async id => User.where({ id }).fetch();

module.exports = { getById };
