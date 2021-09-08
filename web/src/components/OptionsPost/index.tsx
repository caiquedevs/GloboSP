import { useCallback, useState, memo } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import request from 'services/api';
import IPost from 'interfaces/post';

import { Container } from './styles';
import LoadingIcon from 'assets/loading';

interface OptionsPostProps {
  id: string;
  setPosts: any;
}

function OptionsPost({ id, setPosts }: OptionsPostProps) {
  const history = useHistory();

  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);

  const handleClickEdit = () => {
    setLoadingEdit(true);
    history.push(`/form-post?postId=${id}`);
  };

  const handleClickDelete = useCallback(() => {
    const decision = window.confirm('Deseja excluir este post permanentemente?');

    if (decision) {
      setLoadingDelete(true);

      const onSuccess = () => {
        toast.success('Post deletado com sucesso!');
        setPosts((posts: IPost[]) => posts.filter((post) => post._id !== id));
      };

      const onError = (error: any) => {
        toast.success(error.data.msg);
      };

      const onFinally = () => setLoadingDelete(false);

      request({ method: 'DELETE', url: `/post/${id}` })
        .then(onSuccess)
        .catch(onError)
        .finally(onFinally);
    }
  }, [id, setPosts]);

  return (
    <Container className="options">
      <button type="button" disabled={loadingEdit} className="btn-edit" onClick={handleClickEdit}>
        {loadingEdit ? <LoadingIcon /> : <MdEdit size="28px" />}
      </button>

      <button type="button" disabled={loadingDelete} className="btn-delete" onClick={handleClickDelete}>
        {loadingDelete ? <LoadingIcon /> : <MdDelete size="28px" />}
      </button>
    </Container>
  );
}

export default memo(OptionsPost);
