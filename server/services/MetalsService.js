import mongoose from "mongoose"
import Metal from "../models/Metal"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Metal', Metal)

class MetalsService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async getById(id) {
    return await _repository.findById(id)
  }

  async create(newData) {
    return await _repository.create(newData)
  }

  // async edit(data) {
  //   // Deletes properties that == "" so user can leave update fields empty without them resetting to "" 
  //   for (const key of Object.keys(data)) {
  //     if (data[key] == "") {
  //       delete data[key]
  //     }
  //   }

  //   let res = await _repository.findOneAndUpdate({ _id: data.id, authorId: data.authorId }, data, { new: true })
  //   return res
  // }

  async addPosTxData(newTx) {
    let pricePerMetalUnit = newTx.marketValue / newTx.metalAmount
    let metalData = await this.getById(newTx.metalId)
    //@ts-ignore
    let oldAvValue = metalData.localValAv
    //@ts-ignore
    let oldCount = metalData.posTxCount

    //@ts-ignore
    if (metalData.posTxCount == 0) {
      await _repository.findOneAndUpdate({ _id: newTx.metalId }, { $inc: { posTxCount: +1, localValAv: pricePerMetalUnit, totalOwned: +newTx.metalAmount } })
    } else {
      await _repository.findOneAndUpdate({ _id: newTx.metalId }, { localValAv: (oldAvValue * oldCount + pricePerMetalUnit) / (oldCount + 1) })
      await _repository.findOneAndUpdate({ _id: newTx.metalId }, { $inc: { posTxCount: +1, totalOwned: +newTx.metalAmount } })
    }
  }

  async subFromTotal(newTx) {
    await _repository.findOneAndUpdate({ _id: newTx.metalId }, { $inc: { totalOwned: -Math.abs(newTx.metalAmount) } })
  }
}

const metalsService = new MetalsService()
export default metalsService