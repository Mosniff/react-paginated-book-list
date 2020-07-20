import React, { useEffect, useState } from 'react';
import api from './api/api';

import {
  Container,
  Jumbotron,
  Card
} from 'react-bootstrap';

const BookList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.books.apiBooks({ }).then(response => setData(response));
  });

  return (
    <Container>
      <Jumbotron>
        <h1 className="h1 text-center">Book List</h1>
      </Jumbotron>
      {data
          ? data.items.books.map(book => (
              <Card>
                <Card.Body>
                < Card.Title>{book.book_title}</Card.Title>
                  <p>Book author: {book.book_author}</p>
                  <p>Book pages: {book.book_pages}</p>
                  <p>Publication year: {book.book_publication_year}</p>
                  <p>Publication country: {book.book_publication_country}</p>
                  <p>Publication city: {book.book_publication_city}</p>
                </Card.Body>
              </Card>
          )
        ) : null}
    </Container>
  )
}

export default BookList;