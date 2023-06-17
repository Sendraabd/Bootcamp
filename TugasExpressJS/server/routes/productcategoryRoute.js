import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.productcategoryCtrll.findAll);
router.get("/:ids", indexCtrl.productcategoryCtrll.findOne);
router.post("/", indexCtrl.productcategoryCtrll.create);
router.put("/:id", indexCtrl.productcategoryCtrll.update);
router.delete("/:id", indexCtrl.productcategoryCtrll.deleted);
router.get("/query/:id", indexCtrl.productcategoryCtrll.querySQL);

export default router;
