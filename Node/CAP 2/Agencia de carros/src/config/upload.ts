import crypto from 'crypto'
import multer from 'multer'
import { resolve } from 'path'

/* const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')
interface IUploadConfig {
  driver: 'disk' | 's3'

  tmpFolder: string

  uploadFolder: string

  multer: {
    storage: StorageEngine
  }

  config: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    disk: {}
    aws: {
      bucket: string
    }
  }
} */

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename(request, file, callback) {
          const fileHash = crypto.randomBytes(16).toString('hex')
          const fileName = `${fileHash}-${file.originalname}`
          return callback(null, fileName)
        }
      })
    }
  }
}
