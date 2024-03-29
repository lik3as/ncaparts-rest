import { Router } from 'express'

import ctrlMerc from '../../controllers/mercCtrl';
import util from '../../middleware/util';

const router = Router();

router.get('/Mercadorias', ctrlMerc.get_mercs, ctrlMerc.get_mercs_with_sku);
router.get('/Mercadorias/related', ctrlMerc.get_related);
router.get('/Mercadorias/Columns', ctrlMerc.get_columns);
router.get('/Mercadorias/records', ctrlMerc.count);

/**
 * ONLY WITH AUTHORIZATION
 */
router.post('/Mercadorias', util.verifyMasterJWT, ctrlMerc.create, ctrlMerc.create_many, ctrlMerc.update);
router.delete('/Mercadorias', util.verifyMasterJWT, ctrlMerc.delete_instance);


export default router;