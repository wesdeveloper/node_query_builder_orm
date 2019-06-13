/**
 * Response injection middleware
 *
 * @param {object} req - Object request.
 * @param {object} res - Object response.
 * @param {Object} next - Function to next middleware.
 */
const responseMiddleware = (req, res, next) => {
  res.parseReturn = ({ errors, status = 200, data }) =>
    res.status(status).json({
      errors: errors || ![200, 201].includes(status),
      status,
      data
    });
  next();
};

module.exports = { responseMiddleware };
