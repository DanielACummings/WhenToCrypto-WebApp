import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Transaction = new Schema({
  transactionType: { type: String, required: true },
  date: { type: String, required: true },
  posOrNeg: { type: String, required: true },
  cryptoAmount: { type: Number, required: true },
  marketValue: { type: Number, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true },
  cryptoId: { type: ObjectId, ref: 'Crypto', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

export default Transaction