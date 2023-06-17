import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.costumerCtrl.findAll);
router.get("/:ids", indexCtrl.costumerCtrl.findOne);
router.post("/", indexCtrl.costumerCtrl.create);
router.put("/:id", indexCtrl.costumerCtrl.update);
router.delete("/:id", indexCtrl.costumerCtrl.deleted);
router.get("/query/:id", indexCtrl.costumerCtrl.querySQL);

export default router;
