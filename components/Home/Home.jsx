'use client';

import { Typography } from 'antd';
import { HomeContainer, WorkingMessage } from './Home.styled';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <HomeContainer>
      <WorkingMessage>
        <Title level={4} style={{ color: 'white', margin: 0 }}>
          We have a working app!
        </Title>
      </WorkingMessage>
      <Title style={{ textAlign: 'center' }}>
        Welcome to Glantucan's <br />
        Photography Blog
      </Title>
      <Paragraph>
        This is a simple, elegant blog dedicated to showcasing beautiful photography. Browse through
        our collections and enjoy the visual journey.
      </Paragraph>
      <Paragraph>
        Our minimalist design puts the focus on the images, allowing the photography to speak for
        itself. Each post features high-quality images with the stories behind them.
      </Paragraph>
    </HomeContainer>
  );
};

export default Home;
