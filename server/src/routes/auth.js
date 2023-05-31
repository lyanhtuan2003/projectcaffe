import express from "express";
import { get, signin, signup, forgotPassword } from "../controllers/auth";

const Router = express.Router();

Router.post('/signup', signup);
Router.post('/signin', signin)
Router.get('/signup', get)
Router.post("/forgot-password", forgotPassword);
export default Router;