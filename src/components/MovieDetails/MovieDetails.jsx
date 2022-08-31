import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import noPoster from '../../images/img-default.jpg';
import { getLocalStorage, setLocalStorage } from 'services/localStorage';
import {
  BackLink,
  Content,
  DetailWrapper,
  FavouriteBtn,
  IconArrowLeft,
  Label,
  LinkList,
  ScoreLabel,
  StyledLink,
  Thumb,
} from './MovieDetails.styled';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAddToFavourite, setIsAddToFavourite] = useState(false);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(params.movieId)
      .then(setMovieDetails)
      .finally(() => setLoading(false));
  }, [params]);

  useEffect(() => {
    const savedData = getLocalStorage('favourite');
    if (savedData && savedData.some(data => data.id === movieDetails?.id)) {
      setIsAddToFavourite(true);
    }
  }, [movieDetails?.id]);

  function addFavourite() {
    const isAded = setLocalStorage('favourite', movieDetails);
    setIsAddToFavourite(isAded);
  }

  if (!movieDetails) {
    return <>{loading && <Loader />}</>;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const imgUrl = poster_path ? `${IMAGE_BASE_URL}/${poster_path}` : noPoster;
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = Math.floor(vote_average * 10);
  const genresStr = genres.map(genre => genre.name).join(' ');
  const backLink = location.state?.from ?? '/movies';

  return (
    <Container>
      <BackLink to={backLink}>
        <IconArrowLeft />
        Go back
      </BackLink>
      <DetailWrapper>
        <Thumb>
          <img src={imgUrl} alt={title} width="300" />
        </Thumb>
        <Content>
          {title && (
            <h1>
              {title} ({releaseDate ? releaseDate : 'N/A'})
            </h1>
          )}

          <p>
            <ScoreLabel>User score:</ScoreLabel>{' '}
            {voteAverage ? voteAverage + '%' : 'No information'}
          </p>

          <p>
            <Label>Overview</Label>
            {overview ? overview : 'No information'}
          </p>

          <p>
            <Label>Genres</Label>
            {genresStr ? genresStr : 'No information'}
          </p>
          <FavouriteBtn
            className={isAddToFavourite && 'active'}
            onClick={addFavourite}
            type="button"
          >
            {isAddToFavourite ? 'Remove from favorites' : 'Add to favorites'}
          </FavouriteBtn>
        </Content>
      </DetailWrapper>
      <LinkList>
        <li>
          <StyledLink to="cast" state={{ from: backLink }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: backLink }}>
            Reviews
          </StyledLink>
        </li>
      </LinkList>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
