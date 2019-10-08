import React from 'react';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import { addLocaleData, IntlProvider } from 'react-intl';
import localEng from '../../../data/en.json';
import localDe from '../../../data/de.json';
import Context from '../i18n/createContext';
import Provider from '../i18n/LayoutProvider';
import '../meta/styles.scss';

addLocaleData([...en, ...de]);

const messages = {
	en: localEng,
	de: localDe
};

const Layout = ({ children }) => (
	<Provider>
		<Context.Consumer>
			{({ lang }) => (
				<IntlProvider locale={lang} messages={messages[lang]}>
					<div lang={lang}>{children}</div>
				</IntlProvider>
			)}
		</Context.Consumer>
	</Provider>
);

export default Layout;
