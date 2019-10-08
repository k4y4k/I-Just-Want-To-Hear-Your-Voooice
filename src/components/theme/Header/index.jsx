import React from 'react';
import { Context, Container } from '../../common';
import SelectLanguage from './SelectLanguage';
import { Navbar, StyledHeader } from './styles';

const Header = () => (
	<Context.Consumer>
		{({ toggleLanguage, lang }) => (
			<StyledHeader>
				<Navbar as={Container}>
					<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
				</Navbar>
			</StyledHeader>
		)}
	</Context.Consumer>
);

export default Header;
