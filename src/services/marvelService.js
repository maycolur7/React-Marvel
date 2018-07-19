const PUBLIC_KEY = '5698b71660fd96ae4c01b9ccc73542e5'
const BASE_URL_API = "http://gateway.marvel.com/v1/public/"

const getUrlApiSearch = query =>
  `${BASE_URL_API}characters?nameStartsWith=${query}&apikey=${PUBLIC_KEY}`

export const searchSuperHero = query => {
  const url = getUrlApiSearch(query)
  return fetch(url)
    .then(response => response.json())
    .then(({ data: { results } }) => results)
}