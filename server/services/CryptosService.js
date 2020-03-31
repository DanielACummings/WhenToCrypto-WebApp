import mongoose from "mongoose"
import Crypto from "../models/Crypto"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Crypto', Crypto)

class CryptosService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }
}

const cryptosService = new CryptosService()
export default cryptosService