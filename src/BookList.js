import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Container,
  Jumbotron,
  Card,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import queryString from 'query-string';

import api from './api/api';

const BookList = () => {
  const location = useLocation();
  const history = useHistory();
  const path = window.location.pathname;
  const queryStringNumber = Number(queryString.parse(location.search).page);
  const initialPageNumber = (queryStringNumber > 0) ? queryStringNumber : 1;

  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialPageNumber);

  useEffect(() => {
    api.books.apiBooks({ page: currentPage }).then(response => setData(response));
  }, [currentPage]);

  useEffect(() => {
    if (currentPage > 0) {
      history.push(`${path}?page=${currentPage}`);
    }
  }, [currentPage, history, path]);

  return (
    <Container>
      <Jumbotron>
        <h1 className="h1 text-center">Book List</h1>
        <h3 className="h3 text-center">Page {currentPage}</h3>
      </Jumbotron>
      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-1 flex-fill"
          >
            Prev Page
          </Button>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={data ? data.moreItems : false}
            className="flex-fill"
          >
            Next Page
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        {data
            ? data.items.books.map(book => (
              <Col xs="12" lg="12" className="mb-1">
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
              </Col>
            )
          ) : null}
        </Row>
    </Container>
  )
}

export default BookList;