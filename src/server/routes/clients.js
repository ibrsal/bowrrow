import express from 'express';

import {
  listAllClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
} from '../controllers/clients';

const router = express.Router();

router.get('/', listAllClients);
router.post('/', createClient);
router.get('/:id', getClientById);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;