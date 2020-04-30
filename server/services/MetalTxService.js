import mongoose from "mongoose"
import MetalTx from "../models/MetalTx"

const _repository = mongoose.model('MetalTx', MetalTx)

class MetalsTxService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async create(newData) {
    // Makes metal value negative if user selects "Subtracting" on transaction form
    if (newData.posOrNeg == "neg") {
      newData.metalAmount = -Math.abs(newData.metalAmount)
    }
    return await _repository.create(newData)
  }

  async getTxByMetal(metalId) {
    let tx = await _repository.find({ metalId: metalId })
    return tx
  }
}

const metalTxService = new MetalsTxService()
export default metalTxService