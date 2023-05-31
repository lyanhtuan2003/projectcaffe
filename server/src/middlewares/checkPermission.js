import jwt from "jsonwebtoken";
import User from "../models/auth";

export const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({
        message: "Bạn chưa đăng nhập",
      });
    }
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, "dungdz", async (error, payload) => {
      if (error) {
        if (error.name == 'TokenExpiredError') {
          return res.status(401).json({
            message: "Token hết hạn"
          })
        }
        if (error.name == 'TokenExpiredError') {
          return res.status(401).json({
            message: "Token không hợp lệ "
          })
        }
      }
      const user = await User.findById(payload._id);
      if (user.role !== "admin") {
        return res.status(401).json({
          message: "Bạn không có quyến truy cấp tài nguyên này",
        });
      }
      next();
    });
  } catch (error) { }
};
