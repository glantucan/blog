'use client';

import { Image, Typography } from 'antd';
import { StyledHome } from './Home.styled';

const { Title, Paragraph } = Typography;

const Home = ({ posts }) => {
  return (
    <StyledHome>
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
              <p>Category: {post.category}</p> {/* Display category */}
              <p>Tags: {post.tags.join(', ')}</p> {/* Display tags */}
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
    </StyledHome>
  );
};

export default Home;
