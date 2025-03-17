'use client';

import { Typography } from 'antd';
import { AboutContainer } from './About.styled';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <AboutContainer>
      <Title>About This Blog</Title>
      <Paragraph>
        This photography blog is a platform for sharing beautiful images and the stories behind
        them. Created with a passion for visual storytelling, this space aims to inspire and
        captivate through the art of photography.
      </Paragraph>
      <Paragraph>
        The blog features a clean, minimalist design that puts the focus on the images. The
        single-column layout ensures that each photograph gets the attention it deserves, while
        the responsive design makes the site accessible on any device.
      </Paragraph>
      <Paragraph>
        The blog is built using modern web technologies including Next.js, React, and Ant Design,
        with content managed through GitHub repositories.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
