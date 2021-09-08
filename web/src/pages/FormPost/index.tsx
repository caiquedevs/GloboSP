import { useEffect, useRef, useState } from 'react';
import { Formik, Form, FormikProps, FormikValues } from 'formik';
import { toast } from 'react-toastify';
import { string, object } from 'yup';

import request from 'services/api';
import useQuery from 'hooks/useQuery';
import IPost from 'interfaces/post';

import { Container } from './styles';
import { Input, Button, Hr, Row, Column, Header, H1, Textarea, InputFile } from 'components';
import { useHistory } from 'react-router';

const schema = object().shape({
  title: string().required('Campo obrigatório'),
  content: string().required('Campo obrigatório'),
});

const initialState = {
  title: '',
  content: '',
};

interface CreateEmployeeProps {}

function FormPostPage(props: CreateEmployeeProps) {
  const query = useQuery();
  const history = useHistory();

  const formikRef = useRef<FormikProps<FormikValues>>(null);
  const [file, setFile] = useState<string | Blob>('');
  const [tempFile, setTempFile] = useState<string | undefined>('');

  const postIdForEdit = query.get('postId');

  const onCreate = (payload: any, form: any) => {
    const onSuccess = () => {
      toast.success('Post criado com sucesso!');
      form.resetForm();
      setFile('');
    };

    const onError = () => toast.error('Houve um erro ao criar este post!');
    const onFinally = () => form.setSubmitting(false);

    request({ method: 'POST', url: '/post', data: payload }).then(onSuccess).catch(onError).finally(onFinally);
  };

  const onUpdate = (payload: any, form: any) => {
    const onSuccess = () => {
      toast.success('Post alterado com sucesso!');
      history.push('/');
    };

    const onError = () => toast.error('Houve um erro ao criar este post!');
    const onFinally = () => form.setSubmitting(false);

    request({ method: 'PUT', url: `/post/${postIdForEdit}`, data: payload })
      .then(onSuccess)
      .catch(onError)
      .finally(onFinally);
  };

  const handleSubmit = (values: FormikValues, form: any) => {
    form.setSubmitting(true);

    const payload = new FormData();
    if (!tempFile) payload.append('image', file);
    payload.append('title', values?.title);
    payload.append('content', values?.content);

    if (postIdForEdit) return onUpdate(payload, form);
    else return onCreate(payload, form);
  };

  useEffect(() => {
    if (!postIdForEdit) {
      formikRef.current?.resetForm();
      setTempFile('');
      setFile('');
      return;
    }

    const onSuccess = (response: IPost) => {
      formikRef.current?.setFieldValue('title', response.title);
      formikRef.current?.setFieldValue('content', response.content);
      setTempFile(response.img);
    };

    const onError = () => toast.error('Houve um erro ao tentar editar este post!');

    request({ method: 'GET', url: `/posts/${postIdForEdit}` })
      .then(onSuccess)
      .catch(onError);

    return () => {};
  }, [postIdForEdit]);

  return (
    <Container>
      <Header mode="fixed" />

      <H1>{postIdForEdit ? 'Editar post' : 'Cadastrar novo post'}</H1>

      <Formik innerRef={formikRef} initialValues={initialState} onSubmit={handleSubmit} validationSchema={schema} validateOnChange={false} validateOnBlur={false}>
        {({ errors, setFieldValue, values, setErrors, isSubmitting }) => {
          const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setErrors({ ...errors, [name]: '' });
            setFieldValue(name, value);
          };

          const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
            const getFile = event.target.files![0];
            const typesAccepted = ['image/png', 'image/jpg', 'image/jpeg'];

            if (!typesAccepted.includes(getFile.type)) {
              return toast.info('Formato de imagem inválido!');
            }

            setFile(event.target.files![0]);
            if (tempFile) setTempFile('');
          };

          return (
            <Form autoComplete="off">
              <Row gap="15px" wrap="wrap">
                <Column col={12} minCol="300px">
                  <Input
                    label="Título do post"
                    inputProps={{
                      type: 'text',
                      name: 'title',
                      error: errors?.title,
                      value: values?.title,
                      onChange: handleChange,
                      placeholder: 'Informe o nome completo',
                    }}
                  />
                </Column>
              </Row>

              <Row direction="column" gap="15px" margin="15px 0 0 0">
                <Column col={3} minCol="300px">
                  <InputFile
                    label="Imagem do post"
                    inputProps={{
                      value: '',
                      onChange: handleChangeFile,
                      accept: '.png, .jpg, .jpeg',
                    }}
                  />
                </Column>
                {(file || tempFile) && <img src={tempFile ? tempFile : URL.createObjectURL(file)} alt="thumbnail" />}
              </Row>

              <Hr name="Conteúdo do post" />

              <Row gap="15px">
                <Column col={12} minCol="300px">
                  <Textarea
                    inputProps={{
                      name: 'content',
                      error: errors?.content,
                      value: values?.content,
                      onChange: handleChange,
                      placeholder: 'Informe um conteúdo para o post',
                    }}
                  />
                </Column>
              </Row>

              <Row margin="35px 0 0 0">
                <Column col={3} minCol="300px">
                  <Button type="submit" disabled={isSubmitting} loading={isSubmitting ? 1 : 0} txtTransform="uppercase" bg="primary">
                    {postIdForEdit ? 'Salvar Alterações' : 'Cadastrar'}
                  </Button>
                </Column>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default FormPostPage;
