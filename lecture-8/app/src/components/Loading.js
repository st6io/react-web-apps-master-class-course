import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/core';
import { FaSpinner } from 'react-icons/fa';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const animationRule = css`
  ${spin} 1s linear infinite
`;

const Loading = styled(FaSpinner)`
  height: 64px;
  width: 64px;
  display: 'block';
  margin: 'auto';
  fill: 'grey';
  animation: ${animationRule};
  position: ${props => (props.inline ? 'relative' : 'absolute')};
  top: 50%;
  left: 50%;
  margin: 0;
`;

export default Loading;
