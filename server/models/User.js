import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const User = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  coupon: { type: String },
  primaryCrypto: { type: ObjectId, ref: 'Crypto' },
  paidThru: { type: String, default: "" },
  grandfatheredSubPrice: { type: String, default: "" }
}, { timestamps: true, toJSON: { virtuals: true } })

User.methods.validatePassword = function (password, hash) {
  return bcrypt.compareSync(password, this.hash)
}

export default User