import React from 'react';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';

const SearchBar = ({onInputChange, handleSubmit, buttonDisabled}) => {
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search"
          onChange={(event) => onInputChange(event.target.value)}
        />
        <InputGroup.Prepend>
          <Button variant="primary" type="submit" disabled={buttonDisabled}>Search</Button>
        </InputGroup.Prepend>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;