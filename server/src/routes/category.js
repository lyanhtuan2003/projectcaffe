import express from "express";

import { get, create, getOne, remove, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";


const Router = express.Router();

Router.post("/category", checkPermission, create);
Router.put("/category/:id", checkPermission, update);
Router.get("/category/:id", getOne);
Router.get("/category", get);
Router.delete("/category/:id", checkPermission, remove);

export default Router;
