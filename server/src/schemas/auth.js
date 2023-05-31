import joi from "joi";

export const signupSchemas = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Không được để trống tên",
        "any.required": "Trường name là bắt buộc"
    }),
    email: joi.string().required().email().messages({
        "string.empty": "Không được để trống email",
        "any.required": "Trường email là bắt buộc",
        "string.email": "Yêu cầu đúng định dạng email"
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Không được để trống password",
        "string.min": "Phải đủ {#limit} ký tự",
        "any.required": "Trường password là bắt buộc",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.empty": "Không được để trống confirmPassword",
        "any.required": "Trường confirmPassword là bắt buộc",
    })
})

export const signinSchemas = joi.object({

    email: joi.string().required().email().messages({
        "string.empty": "Không được để trống email",
        "any.required": "Trường email là bắt buộc",
        "string.email": "Yêu cầu đúng định dạng email"
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Không được để trống password",
        "string.min": "Phải đủ {#limit} ký tự",
        "any.required": "Trường password là bắt buộc",
    }),
})