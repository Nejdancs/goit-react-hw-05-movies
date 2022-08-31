import { Link, useLocation } from 'react-router-dom';
import { Content, Img, Item } from './MovieItem.styled';
import noPoster from '../../images/img-default.jpg';
import PropTypes from 'prop-types';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';

const MovieItem = ({ id, title, poster_path, release_date }) => {
  const location = useLocation();

  const imgUrl = poster_path ? `${IMAGE_BASE_URL}/${poster_path}` : noPoster;

  const releaseDate = release_date ? release_date.slice(0, 4) : 'N/A';
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <Img src={imgUrl} alt={title} width="300" />
        </div>

        <Content>
          {title ? title : 'No information'} ({releaseDate})
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
