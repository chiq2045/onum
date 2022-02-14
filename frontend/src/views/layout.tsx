import React from 'react';
import { Container } from 'components/container';
import { Nav } from 'components/nav';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  );
};
