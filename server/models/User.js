import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
let Schema = mongoose.Schema

const User = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  paid: { type: String, default: "no", required: true },
  coupon: { type: String }
}, { timestamps: true, toJSON: { virtuals: true } })

User.methods.validatePassword = function (password, hash) {
  return bcrypt.compareSync(password, this.hash)
}

export default User