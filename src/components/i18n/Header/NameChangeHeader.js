import React from 'react';
import Context from '../createContext';
import SelectLanguage from './SelectLanguage';
import { StyledHeader } from './styles';

const Header = () => (
	<Context.Consumer>
		{({ toggleLanguage, lang }) => (
			<StyledHeader>
				<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
			</StyledHeader>
		)}
	</Context.Consumer>
);

export default Header;
