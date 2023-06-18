import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router();

router.get("/", indexCtrl.usersCtrl.findAll);
router.get("/:ids", indexCtrl.usersCtrl.findOne);
router.post("/", indexCtrl.usersCtrl.create);
router.put("/:id", indexCtrl.usersCtrl.update);
router.delete("/:id", indexCtrl.usersCtrl.deleted);
router.get("/query/:id", indexCtrl.usersCtrl.querySQL);

export default router;
