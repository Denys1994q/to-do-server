import {StatusCodes} from 'http-status-codes';

export const PAGE_NOT_FOUND_ERROR = {
  status: StatusCodes.NOT_FOUND,
  message: 'Page not found'
};

export const INTERNAL_SERVER_ERROR = {
  status: StatusCodes.INTERNAL_SERVER_ERROR,
  message: 'Internal Server Error'
};
