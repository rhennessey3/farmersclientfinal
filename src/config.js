let apiPath;
let tokenKey;

if (process.env.NODE_ENV === 'production') {

  apiPath = 'https://farmers-bazaar-api.herokuapp.com/api'

} else {
  apiPath = 'https://farmers-bazaar-api.herokuapp.com/api'
  tokenKey = 'bazaar-dev-auth-token'
}

let API_ENDPOINT = apiPath;
let TOKEN_KEY = tokenKey;

export {
  API_ENDPOINT,
  TOKEN_KEY
}


// asd