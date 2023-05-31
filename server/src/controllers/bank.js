import bank from "../models/bank";
import joi from 'joi';
const bankvalidate = joi.object({
    namebank: joi.string().required().messages({
        "string.empty": "không được để trống",
        "any.required": "trường namebank là bắt buộc"
    }),
    numberbank: joi.number().required().messages({
        "string.empty": "không được để trống",
        "any.required": "trường numberbank là bắt buộc"
    }),
    username: joi.string().required().messages({
        "string.empty": "không được để trống",
        "any.required": "trường username là bắt buộc"
    }),
    content: joi.string().required().messages({
        "string.empty": "không được để trống",
        "any.required": "trường content là bắt buộc"
    })
})
export const get = async (req, res) => {
    try {
        const data = await bank.find()
        if (data.length == 0) {
            return res.status(400).json({
                message: "không có thông tin tài khoản"
            })
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const data = await bank.findById(req.params.id)
        if (!data) {
            return res.status(400).json({
                message: "không có thông tin tài khoản"
            })
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const remove = async (req, res) => {
    try {
        const data = await bank.findByIdAndDelete({ _id: req.params.id })
        if (!data) {
            return res.status(400).json({
                message: "xoá thất bại"
            })
        }
        return res.status(200).json({
            message: "xoá thành công", data
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
export const update = async (req, res) => {
    const { error } = bankvalidate.validate(req.body)
    if (error) {
        const errors = error.details.map(item => item.message)
        return res.status(400).json({
            message: errors
        })
    }
    try {
        const data = await bank.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        if (!data) {
            return res.status(400).json({
                message: "cập nhật thất bại"
            })
        }
        return res.status(200).json({
            message: "cập nhật thành công", data
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const craete = async (req, res) => {
    const { error } = bankvalidate.validate(req.body)
    if (error) {
        const errors = error.details.map(item => item.message)
        return res.status(400).json({
            message: errors
        })
    }
    try {
        const data = await bank.create(req.body)
        if (!data) {
            return res.status(400).json({
                message: "thêm thất bại"
            })
        }
        return res.status(200).json({
            message: "thêm thành công", data
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}