import Axios from 'axios';
import books from './services/books';

export const client = Axios.create({
  baseURL: 'http://nyx.vima.ekt.gr:3000/api'
});

const api = {
  books
};

export default api;