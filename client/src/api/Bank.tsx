import { Ibank } from "../interface/AllApiInterface";
import instance from "./instance";

export const getAllBank = () => {
    return instance.get("/bank")
}
export const getOneBank = (_id: string) => {
    return instance.get("/bank/" + _id)
}
export const removeBank = (_id: string) => {
    return instance.get("/bank/" + _id)
}
export const addBank = (data: Ibank) => {
    return instance.post("/bank", data)
}
export const updateBank = (data: Ibank) => {
    return instance.put("/bank/" + data._id, data)
}