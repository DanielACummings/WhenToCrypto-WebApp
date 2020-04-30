import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Metal = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  measurement: { type: String, required: true },
  img: { type: String },
  notes: { type: String },
  posTxCount: { type: Number, required: true },
  localValAv: { type: Number, required: true },
  totalOwned: { type: Number, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

export default Metal