import React, { useEffect, useState } from 'react';
import api from './api/api';

import Container from 'react-bootstrap/Container';

const BookList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.books.apiBooks({ }).then(response => setData(response));
  });

  return (
    <Container></Container>
  )
}

export default BookList;