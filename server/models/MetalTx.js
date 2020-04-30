import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const MetalTx = new Schema({
  txType: { type: String, required: true },
  date: { type: String, required: true },
  posOrNeg: { type: String, required: true },
  metalAmount: { type: Number, required: true },
  marketValue: { type: Number, required: true },
  notes: { type: String },
  authorId: { type: ObjectId, ref: 'User', required: true },
  metalId: { type: ObjectId, ref: 'Metal', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

export default MetalTx