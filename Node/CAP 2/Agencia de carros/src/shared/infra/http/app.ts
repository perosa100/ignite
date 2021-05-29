import 'reflect-metadata'
import cors from 'cors'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'

import '../../container'

import swaggerFile from '../../../swagger.json'
import { AppError } from '../../error/AppError'
import createConection from '../typeorm'
import { router } from './routes'

const app = express()

createConection()
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json())

app.use(router)
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal Server Errro = ${err.message}`
    })
  }
)

export { app }
