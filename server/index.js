import express from 'express'
import cors from 'cors'
import appConfig from './config/appConfig.js'
import router from './router/router.js'

const { PORT } = appConfig

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", router)

app.listen(PORT || 3000, () => {
    console.info(`Server is running on port ${PORT || 3000}`)
})
