import metalsService from '../services/MetalsService'
import express from 'express'
import { Authorize } from '../middleware/authorize'

export default class MetalsController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      // .get('/:metalId', this.getLedgerMetal)
      .post('', this.create)
      // .put('/:id', this.edit)
      .use(this.defaultRoute)
  }

  defaultRoute(next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      let data = await metalsService.getAll(req.session.uid)
      return res.send(data)
    } catch (error) { next(error) }
  }

  // async getLedgerMetal(req, res, next) {
  //   try {
  //     let data = await metalsService.getById(req.params.metalId)
  //     return res.send(data)
  //   } catch (error) { next(error) }
  // }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await metalsService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  // async edit(req, res, next) {
  //   try {
  //     req.body.authorId = req.session.uid
  //     let data = await metalsService.edit(req.body)
  //     return res.status(201).send(data)
  //   } catch (error) { next(error) }
  // }
}