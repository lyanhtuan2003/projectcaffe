import Category from "../models/category";
import Product from "../models/product";
import { productSchemas } from "../schemas/product";

export const create = async (req, res) => {
  try {
    const { error } = productSchemas.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const product = await Product.create(req.body);
    await Category.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
        products: product._id,
      },

    });
    if (product.length == 0) {
      return res.status(400).json({
        message: "Không thêm được sản phẩm",
      });
    }
    return res.status(200).json({
      product,
    });

  } catch (error) { }
};

export const remove = async (req, res) => {
  try {
    const data = await Product.findOneAndDelete({ _id: req.params.id });
    await Category.findByIdAndUpdate(data.categoryId, {
      $pull: {
        products: data._id,
      },

    });
    return res.json(data);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

export const get = async (req, res) => {
  // products: 10, sort price, order desc, asc
  // GET /products?_sort=price&_order=asc&limit=10
  const {
    _sort = "createAt",
    _order = "asc",
    _limit = 10,
    _page = 1,
  } = req.query;

  const options = {
    page: _page,
    limit: _limit,
    sort: {
      [_sort]: _order == "desc" ? -1 : 1,
    },
  };
  try {
    const { docs, totalDocs, totalPages, page } = await Product.paginate({}, options);
    if (docs.length === 0) {
      return res.status(400).json({ message: "Không có sản phẩm nào" });
    }
    return res.status(200).json({ data: docs, totalDocs, totalPages, page });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id }).populate({
      path: "categoryId",
      select: "-__v"
    });
    if (!data) {
      return res.status(400).json({
        message: "Không có dữ liệu"
      })
    }
    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
export const update = async (req, res) => {
  try {
    // const { data } = await axios.put(
    //     `http://localhost:3000/products/${req.params.id}`,
    //     req.body
    // );
    const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (data.length === 0) {
      return res.status(200).json({
        message: "Cập nhật sản phẩm không thành công",
        data
      });
    }
    return res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
}