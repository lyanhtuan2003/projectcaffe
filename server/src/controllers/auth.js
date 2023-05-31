import User from "../models/auth";
import { signupSchemas, signinSchemas } from "../schemas/auth";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import nodemailer from 'nodemailer';
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    // Kiểm tra xem email có tồn tại trong cơ sở dữ liệu hay không
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Email not found.' });
    }
    // Tạo một mật khẩu mới ngẫu nhiên cho người dùng
    const newPassword = Math.random().toString(36).slice(-8);
    // Lưu mật khẩu mới vào cơ sở dữ liệu
    user.password = newPassword;
    await user.save();
    // Gửi mật khẩu mới đến email của người dùng
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'lyanhtuan21072003@gmail.com',
        pass: 'lyanhtuan21%',
      },
    });

    const mailOptions = {
      from: 'lyanhtuan21072003@gmail.com',
      to: email,
      subject: 'Your new password',
      text: `Your new password is: ${newPassword}`,
    };
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Password reset successful.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to reset password.' });
  }
};



export const signup = async (req, res) => {
  try {
    const { error } = signupSchemas.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    const accessToken = jwt.sign({ _id: user._id }, "dungdz", {
      expiresIn: "1d",
    });
    return res.status(201).json({
      message: " Đăng kí thành công",
      user, accessToken
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = signinSchemas.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }

    const isMath = await bcrypt.compare(password, user.password);
    if (!isMath) {
      return res.status(400).json({
        message: "Password không hợp lệ",
      });
    }

    const accessToken = jwt.sign({ _id: user._id }, "dungdz", {
      expiresIn: "1d",
    });
    return res.status(200).json({
      accessToken,
      message: "Đăng nhập thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const get = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(400).json({
        message: "Không có dữ liệu",
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
