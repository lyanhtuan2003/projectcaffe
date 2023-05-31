import { Iproduct } from "../interface/AllApiInterface"
import instance from "./instance"

export const getallproduct = () => {
    return instance.get("/product")
}
export const getoneproduct = (id: string) => {
    return instance.get("/product/" + id)
}
export const removeproduct = (id: string) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.delete("/product/" + id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const addproduct = (data: Iproduct) => {
    const { accessToken } = JSON.parse(localStorage.getItem('user')!)
    return instance.post("/product", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const updateproduct = (data: Iproduct) => {
    return instance.put("/product/" + data._id, data)
}
export const upload = (file: any) => {
    return instance.post("/images/upload", file).then((_) => _.data)
}
