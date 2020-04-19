import mongoose from "mongoose"
import Transaction from "../models/Transaction"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Transaction', Transaction)

class TransactionsService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async create(newData) {
    // Makes crypto value negative if user selects "Subtracting" on transaction form
    if (newData.posOrNeg == "neg") {
      newData.cryptoAmount = -Math.abs(newData.cryptoAmount)
    }
    return await _repository.create(newData)
  }

  async getTxByCrypto(cryptoId) {
    let tx = await _repository.find({ cryptoId: cryptoId })
    return tx
  }
}

const transactionsService = new TransactionsService()
export default transactionsService