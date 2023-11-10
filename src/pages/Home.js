import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';
import { AccentText, HomeTitle } from 'components/HomeTitle/HomeTitle.styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <CenterWrapper>
      <HomeTitle>
        Welcome to <AccentText>ContactBook</AccentText>! 🥰 Add, edit, and find
        your contacts with ease. Enjoy!
      </HomeTitle>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/register"
      >
        Navigate Contact Galaxy! 🌌
      </Button>
    </CenterWrapper>
  );
};

export default Home;
