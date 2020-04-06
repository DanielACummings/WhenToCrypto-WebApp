import mongoose from "mongoose"
import Transaction from "../models/Transaction"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Transaction', Transaction)

class TransactionsService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async create(newData) {
    // Makes crypto & local currency values negative if user selects "Subtracting" on transaction form
    if (newData.addOrSub == "sub") {
      newData.cryptoAmount = -Math.abs(newData.cryptoAmount)
      newData.marketValue = -Math.abs(newData.marketValue)
    }
    return await _repository.create(newData)
  }
}

const transactionsService = new TransactionsService()
export default transactionsService