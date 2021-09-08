import styled from 'styled-components';

interface IProps {
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  minCol?: string;
  padding?: string;
  margin?: string;
}

const Column = styled.div<IProps>`
  width: ${({ col }) => `calc(100% / 12 * ${col})`};
  min-width: ${({ minCol }) => minCol};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

Column.defaultProps = {
  minCol: '0px',
  padding: '0px',
  margin: '0px',
};

export default Column;
