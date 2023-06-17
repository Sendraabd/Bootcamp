import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.orderdetailCtrl.findAll);
router.get("/:ids", indexCtrl.orderdetailCtrl.findOne);
router.post("/", indexCtrl.orderdetailCtrl.create);
router.put("/:id", indexCtrl.orderdetailCtrl.update);
router.delete("/:id", indexCtrl.orderdetailCtrl.deleted);
router.get("/query/:id", indexCtrl.orderdetailCtrl.querySQL);

export default router;
