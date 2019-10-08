import styled from 'styled-components';
import React from 'react';

const Container = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

const StyledContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`;

export default StyledContainer;
