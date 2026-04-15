import { enquirySchema } from '../helper/validator.js'
import { sheets } from '../service/googleSheet.js'
import appConfig from '../config/appConfig.js'
import dayjs from 'dayjs'
import { ZodError } from 'zod'

const { GOOGLE_SHEET_ID } = appConfig

export const enquiryController = async (req, res) => {
  try {
    // 1. Body Validation
    const body = enquirySchema.parse(req.body)
    const { name, category, emailAddress, message } = body
    console.log({ name, category, emailAddress, message })
    const timestamp = dayjs().format('DD-MM-YYYY HH:mm:ss')
    //2. Google Sheet Entry
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Enquiry!A:E',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, category, emailAddress, message, timestamp]]
      }
    })

    //3. Response
    res.status(201).json({
      success: true,
      message: 'Enquiry captured successfully'
    })
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(422).json({
        success: false,
        message: err.issues
      })
    }

    res.sendStatus(500)
  }
}
