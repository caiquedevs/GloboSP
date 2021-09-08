import { useEffect, useState } from 'react';

import request from 'services/api';
import IPost from 'interfaces/post';

import { Container, ContentPage, Section } from './styles';
import { BigPost, SmallPost, Row, Card, Column, Button } from 'components';
import { useHistory } from 'react-router';

interface HomePageProps {}

function HomePage(props: HomePageProps) {
  const history = useHistory();
  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    const onSuccess = (response: IPost[]) => {
      setPosts(response.reverse());
    };

    const onError = () => {};

    const onFinally = () => {};

    request({ method: 'GET', url: '/posts' }).then(onSuccess).catch(onError).finally(onFinally);

    return () => {};
  }, []);

  const handleClickNewPost = () => {
    history.push('/form-post');
  };

  if (posts && posts.length === 0) {
    return (
      <Row height="100vh" align="center" justify="center">
        <Column col={5} minCol="300px">
          <Card padding="30px">
            <span>Nenhum post encontrado</span>
          </Card>
          <Button bg="primary" type="button" txtTransform="uppercase" onClick={handleClickNewPost}>
            Cadastrar novo post
          </Button>
        </Column>
      </Row>
    );
  }

  return (
    <Container>
      <BigPost posts={posts || []} setPosts={setPosts} />

      <ContentPage>
        <Section>
          <SmallPost posts={posts?.slice(3, posts?.length) || []} setPosts={setPosts} />
        </Section>
      </ContentPage>
    </Container>
  );
}

export default HomePage;
