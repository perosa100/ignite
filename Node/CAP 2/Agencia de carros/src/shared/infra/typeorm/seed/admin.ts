import { hash } from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

import createConection from '..'

async function create() {
  const connection = await createConection()
  const id = uuidv4()
  const password = await hash('admin', 8)

  await connection.query(
    `insert into users(id,name,username,password,email,driver_license,"isAdmin",created_at) values('${id}','admin','admin','${password}','admin@admin.com','AB','true','now()')
    `
  )
}

create().then(() => {
  console.log('admin criado com sucesso')
})
