import styled from 'styled-components';

const H1 = styled.h1`
  margin-bottom: 35px;
  font-weight: normal;
  font-size: 25px;
  line-height: 27px;

  color: ${(props) => props.theme.colors.txtPrimary};
  user-select: none;
  cursor: default;
`;

export default H1;
