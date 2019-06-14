const postService = require("./post-services");
const { logger } = require("../../configs");

const NOT_FOUND_MESSAGE = "Not found!";

/**
 *  Create an post.
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 */
const create = async (req, res) => {
  const { body } = req.payload;
  try {
    logger.trace(`postController.create: ${body.title}`);

    const post = await postService.create(body);
    if (!post) {
      throw error("Failed to create post");
    }
    return res.parseReturn({
      status: 201,
      data: post
    });
  } catch (e) {
    logger.error(`postController.create: ${body.name}`, e);
    return res.parseReturn({
      status: 500
    });
  }
};

/**
 *  Get an post by id.
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 */
const getById = async (req, res) => {
  const { id } = req.payload.params;
  try {
    logger.trace(`postController.getById: ${id}`);
    const post = await postService.getById(id);
    if (!post) {
      return res.parseReturn({
        status: 404,
        data: [{ message: NOT_FOUND_MESSAGE }]
      });
    }
    return res.parseReturn({
      status: 200,
      data: post
    });
  } catch (e) {
    logger.error(`postController.getById: ${id}`, e);
    return res.parseReturn({
      status: 500
    });
  }
};

/**
 *  Get an page of posts.
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 */
const getPaginated = async (req, res) => {
  const { page, quantity } = req.query || {};
  try {
    logger.trace(`postController.getPaginated`);
    const posts = await postService.getPaginated(page, quantity);
    if (!posts) {
      throw error("Failed to get posts");
    }
    return res.parseReturn({
      status: 200,
      data: posts
    });
  } catch (e) {
    logger.error(`postController.getPaginated`, e);
    return res.parseReturn({
      status: 500
    });
  }
};

/**
 *  Delete an post by id.
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 */
const deleteById = async (req, res) => {
  const { id } = req.payload.body;
  try {
    logger.trace(`postController.deleteById: ${id}`);

    const post = await postService.getById(id);
    if (!post) {
      return res.parseReturn({
        status: 404,
        data: [{ message: NOT_FOUND_MESSAGE }]
      });
    }

    await postService.deleteById(id);
    return res.parseReturn({
      status: 200
    });
  } catch (e) {
    logger.error(`postController.deleteById: ${id}`, e);
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
