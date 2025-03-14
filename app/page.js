import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const WorkingMessage = styled.div`
  background-color: ${props => props.theme.colors.success};
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  text-align: center;
`;

export default function Home() {
  return (
    <HomeContainer>
      <WorkingMessage>
        <Title level={4} style={{ color: 'white', margin: 0 }}>
          We have a working app!
        </Title>
      </WorkingMessage>
      <Title>Welcome to the Photography Blog</Title>
      <Paragraph>
        This is a simple, elegant blog dedicated to showcasing beautiful photography. Browse through
        our collections and enjoy the visual journey.
      </Paragraph>
    </HomeContainer>
  );
}
