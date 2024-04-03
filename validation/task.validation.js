import {body} from 'express-validator';
import {PriorityEnum, TagsEnum} from '../constants/task.enum.js';
import {validationErrors} from '../constants/validationErrors.js';

export const createTaskValidation = [
  body('title')
    .notEmpty()
    .withMessage(validationErrors.FIELD_REQUIRED)
    .isLength({ min: 5 })
    .withMessage(validationErrors.INVALID_LENGTH),
  body('priority')
    .notEmpty()
    .withMessage(validationErrors.FIELD_REQUIRED)
    .isIn(Object.values(PriorityEnum))
    .withMessage(validationErrors.INVALID_VALUE),
  body('tags')
    .optional()
    .isIn(Object.values(TagsEnum))
    .withMessage(validationErrors.INVALID_VALUE),
  body('expired_date')
    .notEmpty()
    .withMessage(validationErrors.FIELD_REQUIRED)
    .isISO8601()
    .withMessage(validationErrors.INVALID_DATE)
];
