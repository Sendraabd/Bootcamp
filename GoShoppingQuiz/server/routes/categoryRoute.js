import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.categoryCtrl.findAll);
router.get("/:ids", indexCtrl.categoryCtrl.findOne);
router.post("/", indexCtrl.categoryCtrl.create);
router.put("/:id", indexCtrl.categoryCtrl.update);
router.delete("/:id", indexCtrl.categoryCtrl.deleted);
router.get("/query/:id", indexCtrl.categoryCtrl.querySQL);

export default router;
