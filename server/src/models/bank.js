import mongoose from 'mongoose'
const bankSchame = mongoose.Schema({
    namebank: String,
    numberbank: Number,
    username: String,
    content: String
})
export default mongoose.model("Banks", bankSchame)