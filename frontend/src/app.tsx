import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'views/home';
import { ViewNotes } from 'views/viewNotes';
import { Layout } from 'views/layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/notes' element={<ViewNotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
