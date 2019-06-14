const postModel = require("./post-model");

/**
 *  Create an post.
 *
 * @param {Object} post - Post data of the new post.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const create = async post => postModel.create(post);

/**
 * Get an post by the id.
 *
 * @param {String} id - Id of the post.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getById = async id => postModel.getById(id);

/**
 * Get posts paginated.
 *
 * @param {Number} page - page of posts.
 * @param {Number} pageSize - pageSize of posts.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const getPaginated = async (page, pageSize) =>
  postModel.getPaginated(page, pageSize);

/**
 * Delete an post by the id.
 *
 * @param {String} id - Id of the post.
 * return {Promise.<Object, Error>} Return a promise that will give a token when resolved.
 */
const deleteById = async id => postModel.deleteById(id);

module.exports = {
  create,
  getById,
  getPaginated,
  deleteById
};
