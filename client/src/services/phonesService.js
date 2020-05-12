const url = process.env.PHONES_API_URL

const fetchPhones = () => {
  return fetch(url).then((res) => res.json())
}

export { fetchPhones }
