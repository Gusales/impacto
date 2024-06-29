import axios from 'axios'

const { VITE_VOUNCHERS_API_LINK } = import.meta.env

export const vounchersAPI = axios.create({
  baseURL: VITE_VOUNCHERS_API_LINK,
})