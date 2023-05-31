import express from "express"
import { craete, get, getOne, remove, update } from "../controllers/bank"
import { checkPermission } from "../middlewares/checkPermission"
const router = express.Router()

router.get("/bank", get)
router.get("/bank/:id", getOne)
router.delete("/bank/:id", checkPermission, remove)
router.put("/bank/:id", checkPermission, update)
router.post("/bank", checkPermission, craete)

export default router
