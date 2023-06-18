import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.itemproductCtrl.findAll);
router.get("/:ids", indexCtrl.itemproductCtrl.findOne);
router.post("/", indexCtrl.itemproductCtrl.create);
router.put("/:id", indexCtrl.itemproductCtrl.update);
router.delete("/:id", indexCtrl.itemproductCtrl.deleted);
router.get("/query/:id", indexCtrl.itemproductCtrl.querySQL);
router.post("/cart/:id", indexCtrl.itemproductCtrl.addToCart);
export default router;
