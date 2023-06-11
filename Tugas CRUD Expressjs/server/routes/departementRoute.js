import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/',indexCtrl.departementCtrl.findAll)
router.get('/:ids',indexCtrl.departementCtrl.findOne)
router.post('/',indexCtrl.departementCtrl.create)
router.put('/:id',indexCtrl.departementCtrl.update)
router.delete('/:id',indexCtrl.departementCtrl.deleted)
router.get('/query/:id',indexCtrl.departementCtrl.querySQL)

export default router