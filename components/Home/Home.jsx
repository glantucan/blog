// components/Home/Home.jsx
'use client';

import { Image, Typography } from 'antd';
import { HomeContainer, WorkingMessage } from './Home.styled';

const { Title, Paragraph } = Typography;

const Home = ({ posts }) => {
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

      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <h2>{post.title}</h2>
              <p>{new Date(post.date).toLocaleDateString()}</p>

              {post.featuredImages &&
                post.featuredImages.map((fImage, index) => (
                  <Image
                    key={fImage}
                    width={200}
                    src={fImage}
                    alt={`Featured Image ${index + 1}`}
                  />
                ))}
              <p>{post.excerpt}</p>
              <p>{post.readingTime} min read</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </HomeContainer>
  );
};

export default Home;
