import { Request, Response, NextFunction } from 'express'

import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UsersRepository'
import { AppError } from '../../../error/AppError'

export async function ensureAdmin(
  request: Request,
  _: Response,
  next: NextFunction
) {
  const { id } = request.user

  const usersRepository = new UsersRepository()

  const user = await usersRepository.findById(id)

  if (!user.isAdmin) {
    throw new AppError('Usuario sem permissão de administrador')
  }

  return next()
}
