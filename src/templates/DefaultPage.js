import React from 'react';
import NavBar from '../components/UI/NavBar';
import { Main } from '../style/DefaultPageStyle';

const DefaultPage = ({ children }) => {
  return (
    <>
      <NavBar />

      <Main>{children}</Main>
    </>
  );
};

export default DefaultPage;
