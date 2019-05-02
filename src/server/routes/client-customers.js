import express from 'express';

import {
    getClientCustomres,
  
} from '../controllers/client-customers';

const router = express.Router();


router.get('/:id', getClientCustomres);


export default router;