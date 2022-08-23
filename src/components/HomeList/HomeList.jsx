import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  Link,
} from './HomeList.styled';
// import { Container } from 'components/Container/Container';
import { IMG_PATH } from '../../pages/Home';

export const HomeList = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieItem key={id}>
            <Link to={`movies/${id}`}>
              <MoviePoster src={IMG_PATH + poster_path} alt={title} />
              <MovieTitle>{title}</MovieTitle>
            </Link>
          </MovieItem>
        );
      })}
    </MoviesContainer>
  );
};