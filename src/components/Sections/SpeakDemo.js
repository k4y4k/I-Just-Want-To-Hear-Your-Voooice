import React from 'react';
import styled from 'styled-components';

const SpeakDemo = ({ className, children }) => {
	return (
		<div className={className}>
			<h1>SpeakDemo</h1>
		</div>
	);
};

const StyledSpeakDemo = styled(SpeakDemo)`
  height: 100vh;
  box-sizing: border-box;
`;

export default StyledSpeakDemo;
