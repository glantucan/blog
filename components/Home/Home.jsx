'use client';

import { Image, Typography } from 'antd';
import { StyledHome } from './Home.styled';

const { Title, Paragraph } = Typography;

const Home = ({ posts }) => {
  return (
    <StyledHome>
      <Title style={{ textAlign: 'center' }}>
        El blog de NewbeForever/Glantucan <br />
      </Title>
      <Paragraph>Aprendiendo a desaprender.. y otras fricadas varias.</Paragraph>

      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <h2>{post.title}</h2>
              <p>{new Date(post.date).toLocaleDateString()}</p>
              <p>Categoría: {post.category}</p> {/* Display category */}
              <p>Etiquetas: {post.tags.join(', ')}</p> {/* Display tags */}
              {post.featuredImages &&
                post.featuredImages.map((fImage, index) => (
                  <Image
                    key={fImage}
                    width={200}
                    src={fImage}
                    alt={`Imagen destacada ${index + 1}`}
                  />
                ))}
              <p>{post.excerpt}</p>
              <p>Lectura de {post.readingTime} min</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se han encontrado publicaciones.</p>
      )}
    </StyledHome>
  );
};

export default Home;
