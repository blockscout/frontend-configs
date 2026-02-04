import schema from './schema.js'
import validateFilesWithYup from '../utils/validateFilesWithYup.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log()
validateFilesWithYup(
  path.resolve(__dirname, '../../configs/marketplace-security-reports'),
  schema
)
