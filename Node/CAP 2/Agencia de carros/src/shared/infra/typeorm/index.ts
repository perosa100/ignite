import { Connection, createConnection, getConnectionOptions } from 'typeorm'
/* 
interface IOptions {
  host: string
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions
  newOptions.host = 'database'
  createConnection({
    ...options
  })
}) */

/* rentex_test */
createConnection()
export default async (host = 'localhost'): Promise<Connection> => {
  const defaulfOptions = await getConnectionOptions()
  return createConnection(
    Object.assign(defaulfOptions, {
      host: process.env.NODE_ENV === 'test' ? 'localhost' : host,
      database:
        process.env.NODE_ENV === 'test'
          ? 'rentex_test'
          : defaulfOptions.database
    })
  )
}
