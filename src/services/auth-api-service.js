import { API_ENDPOINT } from '../config'
import TokenService from '../services/TokenService';

const AuthApiService = {
  async login(user_name, password){
    const loginData = {user_name, password};
    const res = await fetch(`${API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }
    return res.json();
  },

  async createUser(userData){
    const res = await fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))  
    }

    return res.json();
  },

  async getCurrentUser() {
    let currentuser = TokenService.getUserId()
    const res = await fetch(`${API_ENDPOINT}/auth/${currentuser}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
  
      }
    })

    if (!res.ok) {
      return res.json().then(e => Promise.reject(e))
    }

    return res.json();
  }
}

export default AuthApiService;