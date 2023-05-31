import { Iacount } from "../interface/AllApiInterface";
import instance from "./instance";

export const getallauth = () => {
    return instance.get("/signup")
}

export const signup = (user: Iacount) => {
    return instance.post("/signup", user)
}

export const signin = (user: Iacount) => {
    return instance.post("/signin", user)
}
