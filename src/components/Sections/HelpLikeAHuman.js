import React from 'react';
import styled from 'styled-components';

const HelpLikeAHuman = ({ className, children }) => {
	return (
		<div className={className}>
			<h1>HelpLikeAHuman</h1>
		</div>
	);
};

const StyledHelpLikeAHuman = styled(HelpLikeAHuman)`
  background-color: steelblue;
   min-height: 50vh;
`;

export default StyledHelpLikeAHuman;
