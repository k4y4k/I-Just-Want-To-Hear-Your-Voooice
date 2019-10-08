import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import Header from '../components/i18n/Header/NameChangeHeader';
import Hero from '../components/Sections/Hero';
import SpeakDemo from '../components/Sections/SpeakDemo';
import HelpLikeAHuman from '../components/Sections/HelpLikeAHuman';
import GetNow from '../components/Sections/GetNow';

const IndexPage = ({ className, children }) => {
	return (
		<Layout>
      <>
        <Header />
        <Hero />
        <HelpLikeAHuman />
        <SpeakDemo />
        <GetNow />
      </>
		</Layout>
	);
};

const StyledIndexPage = styled(IndexPage)``;

export default StyledIndexPage;
