import mongoose from "mongoose"
import Transaction from "../models/Transaction"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Transaction', Transaction)

class TransactionsService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async create(newData) {
    return await _repository.create(newData)
  }
}

const transactionsService = new TransactionsService()
export default transactionsService