import Category from "../models/category";
import Product from "../models/product";
import { categorySchemas } from "../schemas/category";

export const getOne = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate(
      "products"
    );
    if (!category) {
      return res.status(400).json({
        message: "Không có danh mục dữ liệu",
      });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const get = async (req, res) => {
  try {
    const category = await Category.find();
    if (!category) {
      return res.status(400).json({
        message: "Không có dữ liệu",
      });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const create = async (req, res) => {
  try {
    const { error } = categorySchemas.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data = await Category.create(req.body);
    if (data.length == 0) {
      return res.status(400).json({
        message: "Không thêm được danh mục",
      });
    }
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    const data = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (data.length === 0) {
      return res.status(400).json({
        message: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.status(200).json({
      message: "Update thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({});
  }
};
export const remove = async (req, res) => {
  try {
    const oldCategory = await Category.findById(req.params.id);
    const products = oldCategory.products;
    const oldCategoryName = oldCategory.name;
    const newCategoryData = {
      name: `${oldCategoryName}_copy`,
      products: products,
    };
    const newCategory = await Category.create(newCategoryData);
    const data = await Category.findOneAndDelete({ _id: req.params.id });
    await Product.deleteMany({ categoryId: req.params.id });
    return res.json({
      message: "Xóa sản phẩm thành công và copy dữ liệu vào", newCategory,
      data,

    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
