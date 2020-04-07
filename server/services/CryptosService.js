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

  async addPosTxData(newTx) {
    let pricePerCryptoUnit = newTx.cryptoAmount / newTx.marketValue
    return await _repository.findOneAndUpdate({ _id: newTx.cryptoId }, { $inc: { posTxCount: +1, posTxLocalValSum: +pricePerCryptoUnit, totalOwned: +newTx.cryptoAmount } })
  }
}

const cryptosService = new CryptosService()
export default cryptosService