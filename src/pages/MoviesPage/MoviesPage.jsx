import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PaginatedItems from 'components/Pagination/Pagination';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByKey } from 'services/api';
import { NotFoundText } from './MoviesPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  const pageParam = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    if (!queryParam) {
      setMovies(null);
      return;
    }

    setLoading(true);
    getMovieByKey(queryParam, pageParam)
      .then(res => {
        if (res.results.length === 0) {
          Notify.failure('Nothing is found. Wrong query.');
        }
        setMovies(res);
      })
      .finally(() => setLoading(false));
  }, [pageParam, queryParam]);

  function onSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.query;
    let { value } = input;

    if (!value) {
      Notify.warning('Enter the name of the movie, for a correct search!');
      return;
    }

    setSearchParams({ query: value, page: 1 });
  }

  return (
    <>
      {loading && <Loader />}
      <Container>
        <SearchMovies onSubmit={onSubmit} value={queryParam} />
        {movies &&
          (movies?.results?.length === 0 ? (
            <NotFoundText>Nothing found for your request</NotFoundText>
          ) : (
            <MovieList movies={movies.results} />
          ))}

        {movies && (
          <PaginatedItems
            setPage={page => setSearchParams({ query: queryParam, ...page })}
            totalPages={movies.total_pages}
            currentPage={pageParam - 1}
          />
        )}
      </Container>
    </>
  );
};

export default MoviesPage;
