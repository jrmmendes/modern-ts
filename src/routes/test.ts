import { Router } from 'express';
import { SuccessMsgResponse } from '../core/api-response';
import asyncHandler from '../core/async-handler';

const router = Router();

router.get('/test', asyncHandler(async (req, res, next) => {
    throw Error('huehue');
  }),
);

export default router;
