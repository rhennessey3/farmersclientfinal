let apiPath;
let tokenKey;

if (process.env.NODE_ENV === 'production') {

  apiPath = 'https://farmers-bazaar-api.herokuapp.com/api'
  //tokenKey = '3c02a47f10871c3fe78046a1f6c01a8ad0c3a997152736e3de5ae84baaf9cd2e'
  
} else {
  apiPath = 'http://localhost:8000/api'
  tokenKey = 'bazaar-dev-auth-token'
}

let API_ENDPOINT = apiPath;
let TOKEN_KEY = tokenKey;

export  {
  API_ENDPOINT,
  TOKEN_KEY
}
