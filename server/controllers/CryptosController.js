import cryptosService from '../services/CryptosService'
import express from 'express'
import { Authorize } from '../middleware/authorize'

export default class CryptosController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:cryptoId', this.getLedgerCrypto)
      .post('', this.create)
      .put('/:id', this.edit)
      .use(this.defaultRoute)
  }

  defaultRoute(next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let data = await cryptosService.getAll(req.session.uid)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async getLedgerCrypto(req, res, next) {
    try {
      let data = await cryptosService.getById(req.params.cryptoId)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await cryptosService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await cryptosService.edit(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }
}