import { Router } from 'express';
import { deleteInventario, getInventarios, newInventario } from '../controllers/inventario';

const router = Router();

router.post('/newInventario',newInventario);
router.get('/getInventarios',getInventarios);
router.delete('/:cod',deleteInventario);

export default router;