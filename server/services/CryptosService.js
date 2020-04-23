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

    let res = await _repository.findOneAndUpdate({ _id: data.id }, data, { new: true })
    // if(data.authorId != req.session.uid) {throw error...}
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
}

const cryptosService = new CryptosService()
export default cryptosService