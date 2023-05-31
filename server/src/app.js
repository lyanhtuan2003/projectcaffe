import express from "express";
import mongoose from "mongoose";
import RouterSignup from "./routes/auth";
import RouterProduct from "./routes/product";
import RouteCategory from "./routes/category";
import uploadImageRouter from "./routes/uploadImage";
import BankRouter from "./routes/bank";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", RouterSignup);
app.use("/api", RouterProduct);
app.use("/api", RouteCategory);
app.use("/api", uploadImageRouter);
app.use("/api",BankRouter)
mongoose.connect("mongodb://localhost:27017/accgame")
export const viteNodeApp = app;


// const app = require('express')();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// // Giả sử danh sách tin nhắn đã có sẵn
// let messages = [{text: 'Hello', sender: 'user'}, {text: 'Hi', sender: 'bot'}];

// // API lấy tất cả tin nhắn
// app.get('/api/messages', (req, res) => {
//   res.send(messages);
// })

// // Khi client kết nối tới server
// io.on('connection', (socket) => {
  
//   // Khi server nhận được một tin nhắn từ client
//   socket.on('chat message', (message) => {
//     messages.push(message); // Thêm tin nhắn vào danh sách
//     io.emit('chat message', message); // Gửi lại tin nhắn cho tất cả các client đang kết nối
//   });

// });

// // Khởi động server
// const PORT = process.env.PORT || 3000;
// http.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
