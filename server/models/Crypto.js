import mongoose from "mongoose"
import Transaction from "./Transaction"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const _transactionRepository = mongoose.model('Transaction', Transaction)

const Crypto = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  notes: { type: String },
  posTxCount: { type: Number, required: true },
  localValAv: { type: Number, required: true },
  totalOwned: { type: Number, required: true },
  authorId: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

Crypto.pre('findOneAndRemove', function (next) {
  Promise.all([
    //@ts-ignore
    _transactionRepository.deleteMany({ cryptoId: this._conditions._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})

export default Crypto