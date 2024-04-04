import {validationResult} from 'express-validator';
import {BAD_REQUEST_ERROR} from '../constants/errors.js';

export default (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(BAD_REQUEST_ERROR.status).json(errors.array());
  }

  next();
};
