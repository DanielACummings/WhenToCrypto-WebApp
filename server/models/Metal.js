import mongoose from "mongoose"
import MetalTx from "./MetalTx"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const _metalTxRepository = mongoose.model('MetalTx', MetalTx)

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

Metal.pre('findOneAndRemove', function (next) {
  Promise.all([
    //@ts-ignore
    _metalTxRepository.deleteMany({ metalId: this._conditions._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})

export default Metal