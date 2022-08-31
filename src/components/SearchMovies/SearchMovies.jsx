import { Button, Form, Input, Wrapper } from './SearchMovies.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchMovies = ({ onSubmit, value }) => {
  const [query, setQuery] = useState(value);
  return (
    <Form onSubmit={onSubmit}>
      <Wrapper>
        <Input
          type="text"
          name="query"
          onChange={e => setQuery(e.target.value)}
          value={query}
          placeholder="search movies..."
        />
        <Button type="submit">Search</Button>
      </Wrapper>
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};

export default SearchMovies;
