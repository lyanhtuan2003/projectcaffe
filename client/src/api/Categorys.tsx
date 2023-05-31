
import { Icategory } from "../interface/AllApiInterface"
import instance from "./instance"


export const getallcategory = () => {

    return instance.get("/category")
}
export const getonecategory = (id: string) => {
    return instance.get("/category/" + id)
}
export const removecategory = (id: string) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.delete("/category/" + id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const addcategory = (data: Icategory) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.post("/category", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const updatecategory = (data: Icategory) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.put("/category/" + data._id, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}