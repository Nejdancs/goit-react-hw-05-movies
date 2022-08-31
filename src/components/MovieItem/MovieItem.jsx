import { Link, useLocation } from 'react-router-dom';
import { Content, Item } from './MovieItem.styled';
import PropTypes from 'prop-types';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';

const MovieItem = ({ id, title, poster_path, release_date }) => {
  const location = useLocation();

  const releaseDate = release_date.slice(0, 4);
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <img src={`${IMAGE_BASE_URL}/${poster_path}`} alt={title} />
        </div>

        <Content>
          {title} ({releaseDate})
        </Content>
      </Link>
    </Item>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
};

export default MovieItem;
