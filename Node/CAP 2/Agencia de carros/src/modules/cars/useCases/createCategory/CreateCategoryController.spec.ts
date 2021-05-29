import { hash } from 'bcrypt'
import request from 'supertest'
import { Connection } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

import { app } from '../../../../shared/infra/http/app'
import createConnection from '../../../../shared/infra/typeorm'

let connection: Connection

describe('Create Category Controller', () => {
  beforeAll(async () => {
    connection = await createConnection()
    await connection.runMigrations()

    const id = uuidv4()
    const password = await hash('admin', 8)

    await connection.query(`insert into users(id,name,username,password,email,driver_license,"isAdmin",created_at) values('${id}','admin','admin','${password}','admin@admin.com','AB','true','now()')
    `)
  })

  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('should create a new category ', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@admin.com',
      password: 'admin'
    })

    const { token } = responseToken.body

    const response = await request(app)
      .post('/categories')
      .send({
        name: 'Category SuperTest',
        description: 'Category SuperTest'
      })
      .set({
        Authorization: `Bearer ${token}`
      })
    console.log(response.status, 'response.status')

    expect(response.status).toBe(201)
  })
})
