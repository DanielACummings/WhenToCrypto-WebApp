import cryptosService from '../services/CryptosService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'

export default class CryptosController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
  }

  defaultRoute(next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let data = await cryptosService.getAll(req.session.uid)
      return res.send(data)
    } catch (err) { next(err) } {

    }
  }
}