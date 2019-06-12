import express from 'express';

import {
  login
} from '../controllers/auth';

console.log("from login Route" + { login });

const router = express.Router();

router.post("/login", login);

export default router;