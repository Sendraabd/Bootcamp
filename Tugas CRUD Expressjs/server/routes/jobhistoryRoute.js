import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/',indexCtrl.jobhistoryCtrl.findAll)
router.get('/:ids',indexCtrl.jobhistoryCtrl.findOne)
router.post('/',indexCtrl.jobhistoryCtrl.create)
router.put('/:id',indexCtrl.jobhistoryCtrl.update)
router.delete('/:id',indexCtrl.jobhistoryCtrl.deleted)
router.get('/query/:id',indexCtrl.jobhistoryCtrl.querySQL)

export default router