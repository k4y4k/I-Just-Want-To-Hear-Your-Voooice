import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Container from '../components/Layout/Container';
import Layout from '../components/Layout/Layout';
import Header from '../components/i18n/Header/NameChangeHeader';

const Welcome = styled.div`
  padding: 2rem 0;
`;

const IndexPage = ({ className, children }) => {
	return (
		<Layout>
			<React.Fragment>
				<Header />
				<Welcome as={Container}>
					<h2>
						<FormattedMessage id="welcome" />
					</h2>
				</Welcome>
			</React.Fragment>
		</Layout>
	);
};

const StyledIndexPage = styled(IndexPage)``;

export default StyledIndexPage;
