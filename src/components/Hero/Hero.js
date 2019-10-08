import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Hero = ({ className, children }) => {
	return (
		<div className={className}>
			<FormattedMessage tagName="h1" id="welcome" />
			<br />
			<FormattedMessage tagName="h2" id="logo" />
		</div>
	);
};

const StyledHero = styled(Hero)`
  background-color: tomato;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default StyledHero;
