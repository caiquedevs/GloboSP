import { memo } from 'react';
import { Link } from 'react-router-dom';

import IPost from 'interfaces/post';

import { Main, ArticleOne, ArticleTwo, ArticleThree } from './styles';
import { OptionsPost, Header, Row } from 'components';

interface Props {
  posts: IPost[];
  setPosts: any;
}

function BigPost({ posts, setPosts }: Props) {
  return (
    <Main className="shadow">
      {posts.length >= 1 && (
        <ArticleOne img={posts[0]?.img}>
          <Header />

          <Row direction="column" gap="100px">
            <h1>{posts[0]?.title}</h1>
            <Link to={'/post/' + posts[0]?._id}>Ler mais</Link>
          </Row>
          <OptionsPost id={posts[0]?._id} setPosts={setPosts} />
        </ArticleOne>
      )}

      {posts.length >= 2 && (
        <ArticleTwo img={posts[1]?.img}>
          <h1>{posts[1]?.title}</h1>
          <Link to={'/post/' + posts[1]?._id}>Ler mais</Link>
          <OptionsPost id={posts[1]?._id} setPosts={setPosts} />
        </ArticleTwo>
      )}

      {posts.length >= 3 && (
        <ArticleThree img={posts[2]?.img}>
          <h1>{posts[2]?.title}</h1>
          <Link to={'/post/' + posts[2]?._id}>Ler mais</Link>
          <OptionsPost id={posts[2]?._id} setPosts={setPosts} />
        </ArticleThree>
      )}
    </Main>
  );
}

export default memo(BigPost);
