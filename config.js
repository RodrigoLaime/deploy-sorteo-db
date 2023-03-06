require('dotenv').config()

const config = {
  port: process.env.PORT || 4000,
  apiKey: process.env.API_KEY,
}

module.exports = { config }