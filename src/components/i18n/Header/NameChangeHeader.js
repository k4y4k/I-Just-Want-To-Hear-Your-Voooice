import React from 'react';
// import { Context } from "../../common";
import Context from '../createContext';
import Container from '../../Layout/Container';
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
