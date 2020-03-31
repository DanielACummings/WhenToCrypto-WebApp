import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Crypto = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  authorId: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

export default Crypto