import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

dotenv.config({ path: path.join(projectRoot, '.env') })

export default Object.freeze({
  PORT: process.env.PORT,

  // Google Sheets API credentials
  GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  GOOGLE_SHEET_CLIENT_EMAIL: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
  GOOGLE_SHEET_PRIVATE_KEY: process.env.GOOGLE_SHEET_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  GOOGLE_SHEET_CREDENTIALS_FILE: process.env.GOOGLE_SHEET_CREDENTIALS_FILE || path.join(projectRoot, 'valued-night-493319-c4-2ecfb22d600d.json')
})
