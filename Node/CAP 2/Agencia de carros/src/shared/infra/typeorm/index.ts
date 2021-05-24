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
createConnection()
export default async (host = 'localhost'): Promise<Connection> => {
  const defaulfOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaulfOptions, {
      host
    })
  )
}
