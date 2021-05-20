import 'reflect-metadata'
import cors from 'cors'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import './database'
import './shared/container'

import { AppError } from './error/AppError'
import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()
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
app.listen(3333, () => console.log('Server is running!'))
