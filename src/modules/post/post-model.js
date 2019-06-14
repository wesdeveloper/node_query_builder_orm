/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const uuidv4 = require("uuid/v4");
const { database } = require("../../configs");
const { UserModel } = require("../user/user-model");

// eslint-disable-next-line import/order
const Bookshelf = require("bookshelf")(database);

Bookshelf.plugin("registry");
Bookshelf.plugin("visibility");
Bookshelf.plugin("pagination");

const Post = Bookshelf.Model.extend({
  tableName: "posts",
  user: function() {
    console.log("herererer");
    return this.belongsTo(UserModel);
  }
});

/**
 *  Create an post.
 *
 * @param {Object} post - Post data of the new post.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const create = async post =>
  Post.forge({ id: uuidv4(), ...post }).save(null, { method: "insert" });

/**
 * Get an post by the id.
 *
 * @param {String} id - Id of the post.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getById = async id => Post.where({ id }).fetch({ withRelated: ["user"] });

/**
 * Get posts paginated.
 *
 * @param {Number} page - page of posts if not passed default is 1.
 * @param {Number} pageSize - pageSize of posts if not passed default is 10.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getPaginated = async (page = 1, pageSize = 10) =>
  Post.forge()
    .fetchPage({ page, pageSize })
    .then(({ models, pagination }) => {
      return { page: models, pagination };
    });

/**
 * Delete an post by the id.
 *
 * @param {String} id - Id of the post.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const deleteById = async id => Post.forge({ id }).destroy();

module.exports = { create, getById, getPaginated, deleteById };
