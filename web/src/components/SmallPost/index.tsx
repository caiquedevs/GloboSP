import { memo } from 'react';
import { Link } from 'react-router-dom';

import IPost from 'interfaces/post';

import { OptionsPost, Card, Row } from 'components';
import { Container } from './styles';

interface ArticleProps {
  posts: IPost[];
  setPosts: any;
}

function SmallArticle({ posts, setPosts }: ArticleProps) {
  return (
    <Container>
      {posts.map((post) => (
        <article key={post._id}>
          <Card bg="bgSecondary" className="card">
            <figure>
              <img src={post.img} alt="thumbnail" />
            </figure>

            <Row className="text-group" padding="0 30px" direction="column" gap="10px">
              <small>{post.date}</small>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <Link to={'/post/' + post._id}>Ler mais</Link>
            </Row>

            <OptionsPost id={post._id} setPosts={setPosts} />
          </Card>
        </article>
      ))}
    </Container>
  );
}

export default memo(SmallArticle);
