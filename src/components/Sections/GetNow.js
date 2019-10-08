import React from 'react';
import styled from 'styled-components';

const GetNow = ({ className, children }) => {
	return (
		<div className={className}>
			<h1>GetNow</h1>
		</div>
	);
};

const StyledGetNow = styled(GetNow)`
  background-color: purple;
  min-height: 50vh;
`;

export default StyledGetNow;
