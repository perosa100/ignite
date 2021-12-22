import { Router } from 'express'

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient'
import { CreateDeliverymanController } from './modules/deliveryman/createDeliveryman'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post('/client/', authenticateClientController.handle)
routes.post('/client/authenticate', createClientController.handle)

routes.post('/deliveryman/', createDeliverymanController.handle)
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle
)

export { routes }
