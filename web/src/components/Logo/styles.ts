import styled from 'styled-components';

interface ISpan {
  size?: string;
}

export const Span = styled.span<ISpan>`
  width: min-content;
  font-weight: bold;
  font-size: ${({ size }) => size};
  letter-spacing: 0.03em;

  background: linear-gradient(97.99deg, #f9c71b 55.11%, #ff0199 82.18%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

Span.defaultProps = {
  size: '58px',
};
