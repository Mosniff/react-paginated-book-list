import { client } from '../api';

const apiBooks = async({
  page = 1,
  itemsPerPage = 20,
  filters
}) => {
  const response = await client.post('/books', {
    page,
    itemsPerPage,
    filters
  });
  return { items: response.data, moreItems: (itemsPerPage * page >= response.data.count) };
}

export default { apiBooks };