import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export default function About() {
  return (
    <AboutContainer>
      <Title>About This Blog</Title>
      <Paragraph>
        This photography blog is a platform for sharing beautiful images and the stories behind
        them. Created with a passion for visual storytelling, this space aims to inspire and
        captivate through the art of photography.
      </Paragraph>
      <Paragraph>
        The blog is built using modern web technologies including Next.js, React, and Ant Design,
        with content managed through GitHub repositories.
      </Paragraph>
    </AboutContainer>
  );
}
