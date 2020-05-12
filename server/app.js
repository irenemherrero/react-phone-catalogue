require('dotenv').config()
const express = require('express')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')
const cors = require('cors')
const app = express()
const phonesData = require('./phones.json')

// GraphQL schema
const schema = buildSchema(`
    type Query {
        phones: [Phone]
        phone(id: ID!): Phone      
    },
    type Phone {
        id: Int
        name: String
        manufacturer: String
        description: String
        color: String
        price: Int
        imageFileName: String
        screen: String
        processor: String
        ram: Int
    }
`)

const getPhones = () => phonesData
const getPhone = (args) => phonesData.find((phone) => phone.id === args.id)
const root = {
  phones: getPhones,
  phone: getPhone,
}

app.use(cors())
app.use('/images', express.static('images'))
app.use(
  '/phones',
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: false,
  })
)

module.exports = app
