import { Link } from 'react-router-dom';
import { Container } from './style';

export const NoMatch = () => {
  return (
    <Container>
      Sorry, This Page is'nt exist, Please go to the &nbsp;
      <Link to={'/'}>Home</Link>
    </Container>
  );
};
