import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.orderlineitemCtrl.findAll);
router.get("/:ids", indexCtrl.orderlineitemCtrl.findOne);
router.post("/", indexCtrl.orderlineitemCtrl.create);
router.put("/:id", indexCtrl.orderlineitemCtrl.update);
router.delete("/:id", indexCtrl.orderlineitemCtrl.deleted);
router.get("/query/:id", indexCtrl.orderlineitemCtrl.querySQL);

export default router;
