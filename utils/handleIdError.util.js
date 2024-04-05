import {BAD_REQUEST_ERROR} from '../constants/errors.js';
import mongoose from 'mongoose';

export default (req, res, next) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(BAD_REQUEST_ERROR.status).json({message: BAD_REQUEST_ERROR.message});
  }

  next();
};
