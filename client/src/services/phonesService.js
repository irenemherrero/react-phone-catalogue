import axios from 'axios'

const url = process.env.PHONES_API_URL

/**
 * Get phones from API
 * @returns {Promise}
 */
const fetchPhones = () => {
  return axios.get(url)
}

export { fetchPhones }
