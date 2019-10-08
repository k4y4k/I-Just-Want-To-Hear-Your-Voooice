import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Header from "../components/i18n/Header/NameChangeHeader";
import Hero from "../components/Hero/Hero";

const IndexPage = ({ className, children }) => {
  return (
    <Layout>
      <>
        <Header />
        <Hero />
      </>
    </Layout>
  );
};

const StyledIndexPage = styled(IndexPage)``;

export default StyledIndexPage;
