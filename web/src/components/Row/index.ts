import styled from 'styled-components';

interface IProps {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;

  flex?: string;
  direction?: string;
  align?: string;
  justify?: string;
  wrap?: string;
  gap?: string;
}

const Row = styled.div<IProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap};
`;

Row.defaultProps = {
  width: '100%',
  height: 'auto',
  padding: '0px',
  margin: '0px',

  flex: 'initial',
  direction: 'row',
  align: 'flex-start',
  justify: 'flex-start',
  wrap: 'wrap',
  gap: '0px',
};

export default Row;
