require('dotenv').config()

const config = {
  port: process.env.PORT || 4000,
  name: process.env.API_NAME,
  apiKey: process.env.API_KEY,
}

module.exports = { config }