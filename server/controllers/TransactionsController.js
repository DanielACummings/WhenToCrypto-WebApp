import transactionsService from '../services/TransactionsService'
import express from 'express'
import { Authorize } from '../middleware/authorize'
import User from "../models/User"
import cryptosService from "../services/CryptosService"

export default class TransactionsController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .post('', this.create)
  }

  defaultRoute(next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let newTx = await transactionsService.create(req.body)
      //@ts-ignore
      if (newTx.posOrNeg == 'pos') {
        await cryptosService.addPosTxData(newTx)
      }
      return res.status(201).send(newTx)
    } catch (error) { next(error) }
  }
}