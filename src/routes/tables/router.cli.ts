import { Router } from 'express'

import ctrlUser from '../../controllers/ctrl.user';
import util from '../../middleware/util';

const router = Router()

router.post('/tables/Clientes', util.verifyCommonJWT, ctrlUser.create_many, ctrlUser.create_one);
router.get('/tables/Clientes', util.verifyMasterJWT, ctrlUser.all);
router.get('/tables/Clientes/columns', util.verifyCommonJWT, ctrlUser.get_columns);

export default router;