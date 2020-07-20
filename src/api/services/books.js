import { client } from '../api';

const apiBooks = async({
  page = 1,
  itemsPerPage = 20
}) => {
  const response = await client.post('/books', { page, itemsPerPage });
  return { items: response.data, moreItems: (itemsPerPage * page >= response.data.count) };
}

export default { apiBooks };