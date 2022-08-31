import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import PaginatedItems from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies(pageParam)
      .then(res => setTrendingMovies(res))
      .finally(() => setLoading(false));
  }, [pageParam]);

  return (
    <>
      {loading && <Loader />}
      <Container>
        {trendingMovies && <MovieList movies={trendingMovies.results} />}
        {trendingMovies?.total_pages && (
          <PaginatedItems
            setPage={setSearchParams}
            totalPages={trendingMovies.total_pages}
            currentPage={pageParam - 1}
          />
        )}
      </Container>
    </>
  );
};

export default HomePage;
