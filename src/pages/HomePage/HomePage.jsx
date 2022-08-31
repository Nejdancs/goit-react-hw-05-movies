import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(res => setTrendingMovies(res.results))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Container>
        {trendingMovies && <MovieList movies={trendingMovies} />}
      </Container>
    </>
  );
};

export default HomePage;
