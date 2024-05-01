import axios from 'axios'

const API = 'http://localhost:3000/api'

// method to register a user from the client 
export const registerRequest =  user => axios.post(`${API}/register`, user)