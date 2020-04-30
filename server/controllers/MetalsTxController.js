import metalTxService from '../services/MetalTxService'
import express from 'express'
import { Authorize } from '../middleware/authorize'
import metalsService from "../services/MetalsService"

export default class TransactionsController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .post('', this.create)
      // .get('/:metalId', this.getTxByMetal)
      .use(this.defaultRoute)
  }

  defaultRoute(next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let newTx = await metalTxService.create(req.body)
      //@ts-ignore
      if (newTx.posOrNeg == 'pos') {
        await metalsService.addPosTxData(newTx)
      } else {
        await metalsService.subFromTotal(newTx)
      }
      return res.status(201).send(newTx)
    } catch (error) { next(error) }
  }

  // async getTxByMetal(req, res, next) {
  //   try {
  //     let data = await metalsTxService.getTxByMetal(req.params.metalId)
  //     return res.send(data)
  //   } catch (error) { next(error) }
  // }
}