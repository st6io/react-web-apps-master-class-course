import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { range } from 'lodash';

const StyledProgress = styled.div`
  margin-bottom: 2rem;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.1;
    `};
`;

const StyledProgressBar = styled.div`
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: silver;
  border-radius: 0.25rem;
  width: 20rem;
`;

const StyledProgressText = styled.p`
  text-align: center;
  margin: 0.5rem;
`;

const StyledProgressFiller = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: black;
  transition: width 0.6s ease;
  width: ${({ percentage }) => (percentage ? `${percentage}%` : 0)};
`;

const Progress = ({ percentage, disabled }) => (
  <StyledProgress disabled={disabled}>
    <StyledProgressText>{`${percentage ||
      0}%`}</StyledProgressText>

    <StyledProgressBar>
      <StyledProgressFiller percentage={percentage} />
    </StyledProgressBar>
  </StyledProgress>
);

Progress.propTypes = {
  percentage: PropTypes.oneOf(range(0, 101)),
  disabled: PropTypes.bool,
};

Progress.defaultpercentage = {
  percentage: 0,
  disabled: false,
};

export default Progress;
