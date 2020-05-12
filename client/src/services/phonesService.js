import axios from 'axios'

const url = process.env.PHONES_API_URL
const queries = {
  getPhones: `{
          phones {
            id
            name
            manufacturer
            color
            price
            imageFileName                     
          }
        }`,
  getPhone: `
        query getPhone($id: Int!) {
          phone (id: $id) {
            id
            name
            manufacturer
            description
            color
            price
            imageFileName
            screen
            processor
            ram
          }
        }`,
}

const fetchAllPhones = () => {
  return axios.post(url, {
    query: queries.getPhones,
  })
}

const fetchPhone = (phoneID) => {
  return axios.post(url, {
    query: queries.getPhone,
    variables: { id: phoneID },
  })
}

export { fetchAllPhones, fetchPhone }
