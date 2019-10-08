import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/Layout/Layout';
import Container from '../components/Layout/Container';
import Header from '../components/i18n/Header/NameChangeHeader';

const NotFoundPage = () => (
	<Layout>
		<React.Fragment>
			<Header />
			<Container>
				<h2>
					<FormattedMessage id="not_found" />
				</h2>
			</Container>
		</React.Fragment>
	</Layout>
);

export default NotFoundPage;
