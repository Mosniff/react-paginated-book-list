import { client } from '../api';

const apiBooks = async() => {
  const response = await client.post('/books');
  return { items: response.data };
}

export default { apiBooks };