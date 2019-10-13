import { FaHeart } from 'react-icons/fa';
import styled from '@emotion/styled';

const Star = styled(FaHeart)`
  width: 1em;
  cursor: pointer;
  border: none;
  color: ${props => (props.filled ? '#ff6347' : 'grey')};
`;

export default Star;
