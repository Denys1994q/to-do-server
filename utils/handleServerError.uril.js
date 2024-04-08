import {INTERNAL_SERVER_ERROR, NOT_FOUND_ERROR} from '../constants/errors.js';

export const handleServerError = (res) => {
  return res.status(INTERNAL_SERVER_ERROR.status).json({message: INTERNAL_SERVER_ERROR.message});
};

export const handleNotFoundError = (res) => {
  return res.status(NOT_FOUND_ERROR.status).json({message: NOT_FOUND_ERROR.message});
};
