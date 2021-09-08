import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import IPost from 'interfaces/post';

import { Container } from './styles';
import request from 'services/api';
import { H1, Header } from 'components';

interface ShowPostProps {}

interface IParams {
  postid: string;
}

function ShowPost(props: ShowPostProps) {
  const history = useHistory();
  const { postid }: IParams = useParams();

  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    if (!postid) return;

    const onSuccess = (response: IPost) => {
      setPost(response);
    };

    const onError = () => {
      toast.error('Não foi possível visualizar este Post!');
      // history.push('/');
    };

    request({ method: 'GET', url: `/posts/${postid}` })
      .then(onSuccess)
      .catch(onError);

    return () => {};
  }, [history, postid]);

  return (
    <Container>
      <Header mode="fixed" />

      <H1>{post?.title}</H1>

      <figure>
        <img src={post?.img} alt="img post" />
      </figure>

      <p>{post?.content}</p>
    </Container>
  );
}

export default ShowPost;
