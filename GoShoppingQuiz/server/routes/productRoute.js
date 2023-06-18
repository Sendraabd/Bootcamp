import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.productCtrl.findAll);
router.get("/:ids", indexCtrl.productCtrl.findOne);
router.post("/", indexCtrl.productCtrl.create);
router.put("/:id", indexCtrl.productCtrl.update);
router.delete("/:id", indexCtrl.productCtrl.deleted);
router.get("/query/:id", indexCtrl.productCtrl.querySQL);

export default router;
