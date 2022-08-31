import Container from 'components/Container/Container';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { EmptyText, StyledLink } from './Library.syled';

const Library = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const savedData = localStorage.getItem('favourite') ?? '[]';
    const parseDada = JSON.parse(savedData);
    setMovies(parseDada);
  }, []);

  return (
    <Container>
      {movies && movies.length !== 0 ? (
        <MovieList movies={movies} />
      ) : (
        <EmptyText>
          You don't have any movies you've favorites.{' '}
          <StyledLink to="/">Add the first one.</StyledLink>
        </EmptyText>
      )}
    </Container>
  );
};

export default Library;
