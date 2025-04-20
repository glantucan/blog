'use client';

import { Image, Typography, List, Space } from 'antd';
import { StyledHome } from './Home.styled';

const { Title, Paragraph, Text } = Typography;

const Home = ({ posts }) => {
  return (
    <StyledHome>
      <Title style={{ textAlign: 'center' }}>
        El blog de NewbeForever/Glantucan <br />
      </Title>
      <Paragraph>Aprendiendo a desaprender.. y otras fricadas varias.</Paragraph>

      {posts.length > 0 ? (
        <List
          dataSource={posts}
          itemLayout="vertical"
          renderItem={post => (
            <List.Item>
              <Title level={2}>{post.title}</Title>

              {post.featuredImages &&
                post.featuredImages.map((fImage, index) => (
                  <Image
                    key={fImage}
                    width={200}
                    src={fImage}
                    alt={`Imagen destacada ${index + 1}`}
                  />
                ))}
              <Paragraph style={{ marginTop: '0.5em' }}>{post.excerpt}</Paragraph>
              <Space
                align="baseline"
                style={{ display: 'flex', justifyContent: 'space-between' }}
                wrap
              >
                <Space>
                  <Text italic>Categoría:</Text>
                  <Text strong>{post.category}</Text>
                </Space>
                <Space>
                  <Text italic>Etiquetas: </Text>
                  <Text italic strong>
                    {post.tags.join(', ')}
                  </Text>
                </Space>
                <Space>
                  <Text italic>Lectura de {post.readingTime} min</Text>
                </Space>
              </Space>
            </List.Item>
          )}
        />
      ) : (
        <p>No se han encontrado publicaciones.</p>
      )}
    </StyledHome>
  );
};

export default Home;
