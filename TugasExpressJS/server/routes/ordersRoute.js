import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.ordersCtrl.findAll);
router.get("/:ids", indexCtrl.ordersCtrl.findOne);
router.post("/", indexCtrl.ordersCtrl.create);
router.put("/:id", indexCtrl.ordersCtrl.update);
router.delete("/:id", indexCtrl.ordersCtrl.deleted);
router.get("/query/:id", indexCtrl.ordersCtrl.querySQL);

export default router;
