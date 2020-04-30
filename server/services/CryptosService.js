import mongoose from "mongoose"
import Crypto from "../models/Crypto"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Crypto', Crypto)

class CryptosService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async getById(id) {
    return await _repository.findById(id)
  }

  async create(newData) {
    return await _repository.create(newData)
  }

  async edit(data) {
    // Deletes properties that == "" so user can leave update fields empty without them resetting to "" 
    for (const key of Object.keys(data)) {
      if (data[key] == "") {
        delete data[key]
      }
    }

    let res = await _repository.findOneAndUpdate({ _id: data.id, authorId: data.authorId }, data, { new: true })
    return res
  }

  async addPosTxData(newTx) {
    let pricePerCryptoUnit = newTx.marketValue / newTx.cryptoAmount
    let cryptoData = await this.getById(newTx.cryptoId)
    //@ts-ignore
    let oldAvValue = cryptoData.localValAv
    //@ts-ignore
    let oldCount = cryptoData.posTxCount

    //@ts-ignore
    if (cryptoData.posTxCount == 0) {
      await _repository.findOneAndUpdate({ _id: newTx.cryptoId }, { $inc: { posTxCount: +1, localValAv: pricePerCryptoUnit, totalOwned: +newTx.cryptoAmount } })
    } else {
      await _repository.findOneAndUpdate({ _id: newTx.cryptoId }, { localValAv: (oldAvValue * oldCount + pricePerCryptoUnit) / (oldCount + 1) })
      await _repository.findOneAndUpdate({ _id: newTx.cryptoId }, { $inc: { posTxCount: +1, totalOwned: +newTx.cryptoAmount } })
    }
  }

  async subFromTotal(newTx) {
    await _repository.findOneAndUpdate({ _id: newTx.cryptoId }, { $inc: { totalOwned: -Math.abs(newTx.cryptoAmount) } })
  }
}

const cryptosService = new CryptosService()
export default cryptosService