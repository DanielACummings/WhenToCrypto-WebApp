import transactionsService from '../services/TransactionsService'
import express from 'express'
import { Authorize } from '../middleware/authorize'
import User from "../models/User"

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
      let data = await transactionsService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }
}