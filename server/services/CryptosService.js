import mongoose from "mongoose"
import Crypto from "../models/Crypto"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Crypto', Crypto)

class CryptosService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async create(newData) {
    return await _repository.create(newData)
  }
}

const cryptosService = new CryptosService()
export default cryptosService