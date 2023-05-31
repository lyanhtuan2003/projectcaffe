import express from "express";
import { get, create, remove, getOne, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";
const Router = express.Router();
Router.post("/product", checkPermission, create);
Router.delete("/product/:id", checkPermission, remove)
Router.put("/product/:id", checkPermission, update)
Router.get("/product", get)
Router.get("/product/:id", getOne)

export default Router;
