require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY,
}

module.exports = { config }